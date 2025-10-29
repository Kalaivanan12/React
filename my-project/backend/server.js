const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3101;

// Enable CORS
app.use(cors());
app.use(express.json());

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/validationFormDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Create uploads folder if it doesn't exist
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  gender: String,
  file: String, // full file path will be stored here
  date: Date,
  dropdown: String,
  terms: Boolean,
});

const User = mongoose.model("User", userSchema);

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// POST route for form submission
app.post("/api/register", upload.single("file"), async (req, res) => {
  try {
    const { name, email, password, phone, gender, terms, date, dropdown } = req.body;

    // Store full file path (relative to server)
    const filePath = req.file ? `uploads/${req.file.filename}` : null;

    // Save user to MongoDB
    const newUser = new User({
      name,
      email,
      password,
      phone,
      gender,
      date: date ? new Date(date) : new Date(),
      dropdown,
      file: filePath, 
      terms: terms === "true" || terms === true,
    });

    await newUser.save();

    res.json({
      message: "User saved successfully!",
      user: newUser,
    });
  } catch (err) {
    console.error(" Error saving user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
