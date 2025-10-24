const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3101;

// ✅ Enable CORS
app.use(cors());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/validationFormDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Create User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  gender: String,
  file: String, // store filename
  terms: Boolean,
});

const User = mongoose.model("User", userSchema);

// ✅ Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // upload folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage });

// ✅ Create uploads folder if it doesn't exist
const fs = require("fs");
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// ✅ POST route for form submission
app.post("/api/register", upload.single("file"), async (req, res) => {
  try {
    const { name, email, password, phone, gender, terms } = req.body;
    const file = req.file ? req.file.filename : null;

    // Save user to MongoDB
    const newUser = new User({
      name,
      email,
      password,
      phone,
      gender,
      file,
      terms: terms === "true" || terms === true,
    });

    await newUser.save();

    res.json({ message: "User saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
