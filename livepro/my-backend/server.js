const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3101;

app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = "mongodb://127.0.0.1:27017/userManagementDB";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User schema
const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// GET /users?search=&filter=&sort=
app.get("/users", async (req, res) => {
  try {
    const { search, filter, sort } = req.query;
    let query = {};

    if (filter) query.role = filter;
    if (search) query.$or = [
      { name: new RegExp(search, "i") },
      { email: new RegExp(search, "i") }
    ];

    let users = await User.find(query);
    if (sort) {
      users = users.sort((a, b) =>
        sort === "id"
          ? a.id - b.id
          : a[sort].toString().localeCompare(b[sort].toString())
      );
    }
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /users - add new user
app.post("/users", async (req, res) => {
  try {
    const { id, name, email, role } = req.body;
    if (!id || !name || !email || !role)
      return res.status(400).json({ error: "All fields required" });

    const exists = await User.findOne({ id: Number(id) });
    if (exists) return res.status(400).json({ error: "ID already exists" });

    const newUser = new User({ id: Number(id), name, email, role });
    await newUser.save();
    res.json({ message: "User added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /users/:id - update user
app.put("/users/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const { name, email, role } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { id: userId },
      { name, email, role },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ error: "User not found" });

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /users/:id - delete user
app.delete("/users/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const deletedUser = await User.findOneAndDelete({ id: userId });

    if (!deletedUser) return res.status(404).json({ error: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
