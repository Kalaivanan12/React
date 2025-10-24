// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  file: { type: String }, // stores filename
  terms: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
