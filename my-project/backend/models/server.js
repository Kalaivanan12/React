// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");

const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3101;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/validationDB";

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // serve uploaded files

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${unique}${ext}`);
  },
});
const upload = multer({ storage });

// --------------------
// Routes
// --------------------

// Health
app.get("/", (req, res) => res.json({ message: "Backend running" }));

// Create (register) - multipart/form-data
app.post("/api/register", upload.single("file"), async (req, res) => {
  try {
    const { name, email, password, phone, gender, terms } = req.body;
    // basic server-side validation
    if (!name || !email || !password || !phone || !gender || typeof terms === "undefined") {
      return res.status(400).json({ error: "All fields are required" });
    }

    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) return res.status(400).json({ error: "Email already registered" });

    // hash password
    const saltRounds = 10;
    const hashed = await bcrypt.hash(password, saltRounds);

    const fileName = req.file ? req.file.filename : null;

    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashed,
      phone,
      gender,
      file: fileName,
      terms: terms === "true" || terms === true,
    });

    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error in /api/register:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Read all users
app.get("/api/users", async (req, res) => {
  try {
    // Optional query params: search, filter, sort
    const { search, filter, sort } = req.query;
    const query = {};

    if (filter) query.gender = filter; // or role if you had role
    if (search) {
      const regex = new RegExp(search, "i");
      query.$or = [{ name: regex }, { email: regex }, { phone: regex }];
    }

    let users = await User.find(query).select("-password"); // don't return password
    if (sort) {
      if (sort === "name") users = users.sort((a, b) => a.name.localeCompare(b.name));
      else if (sort === "createdAt") users = users.sort((a, b) => b.createdAt - a.createdAt);
    }

    res.json(users);
  } catch (err) {
    console.error("Error in /api/users:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Read single user by id (Mongo _id)
app.get("/api/users/:id", async (req, res) => {
  try {
    const u = await User.findById(req.params.id).select("-password");
    if (!u) return res.status(404).json({ error: "User not found" });
    res.json(u);
  } catch (err) {
    console.error("Error in GET /api/users/:id", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Update user - allow update of name, phone, gender, file and optional password
// Use upload.single("file") if file may be updated
app.put("/api/users/:id", upload.single("file"), async (req, res) => {
  try {
    const { name, email, password, phone, gender, terms } = req.body;
    const update = {};

    if (name) update.name = name;
    if (email) update.email = email.toLowerCase();
    if (phone) update.phone = phone;
    if (gender) update.gender = gender;
    if (typeof terms !== "undefined") update.terms = terms === "true" || terms === true;

    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      update.password = hashed;
    }

    if (req.file) update.file = req.file.filename;

    const updated = await User.findByIdAndUpdate(req.params.id, update, { new: true }).select("-password");
    if (!updated) return res.status(404).json({ error: "User not found" });

    res.json({ message: "User updated", user: updated });
  } catch (err) {
    console.error("Error in PUT /api/users/:id", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    console.error("Error in DELETE /api/users/:id", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
