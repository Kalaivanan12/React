const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2831;

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected to 'students' Database"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Schema + Model
const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  email: String,
  role: String,
});
const User = mongoose.model("User", userSchema);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to MongoDB + Express CRUD API!");
});

// CREATE (Add User)
app.get("/write", async (req, res) => {
  try {
    const { id, name, email, role } = req.query;
    if (!id || !name || !email || !role) {
      return res.status(400).send("Missing id, name, email, or role!");
    }

    const exists = await User.findOne({ id: parseInt(id) });
    if (exists) return res.status(400).send("User ID already exists!");

    const newUser = new User({ id: parseInt(id), name, email, role });
    await newUser.save();

    res.send(`User added successfully!<br>ID: ${id}<br>Name: ${name}<br>Email: ${email}<br>Role: ${role}`);
  } catch (err) {
    res.status(500).send("Server error while adding user.");
  }
});

// UPDATE (Update User by ID)
app.get("/update", async (req, res) => {
  try {
    const { id, name, email, role } = req.query;
    if (!id) return res.status(400).send("Missing user ID!");

    const user = await User.findOne({ id: parseInt(id) });
    if (!user) return res.status(404).send("User not found!");

    if (name) user.name = name;
    if (email) user.email = email;
    if (role) user.role = role;

    await user.save();

    res.send(`User updated successfully!<br>ID: ${user.id}<br>Name: ${user.name}<br>Email: ${user.email}<br>Role: ${user.role}`);
  } catch (err) {
    res.status(500).send("Server error while updating user.");
  }
});

// DELETE (Remove User by ID)
app.get("/delete", async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) return res.status(400).send("Missing user ID!");

    const deleted = await User.findOneAndDelete({ id: parseInt(id) });
    if (!deleted) return res.status(404).send("User not found!");

    res.send(`User with ID ${id} deleted successfully!`);
  } catch (err) {
    res.status(500).send("Server error while deleting user.");
  }
});

// READ (All Users with Search / Filter / Sort)
app.get("/users", async (req, res) => {
  try {
    let { search, sort, filter } = req.query;
    let query = {};

    // Search by name or email (case-insensitive)
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by role (case-insensitive)
    if (filter) {
      query.role = { $regex: `^${filter}$`, $options: "i" };
    }

    let users = await User.find(query);

    // Sort
    if (sort === "name") users.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "id") users.sort((a, b) => a.id - b.id);

    res.json({ users });
  } catch (err) {
    res.status(500).send("Server error while fetching users.");
  }
});

// READ (Single User by ID)
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ id: parseInt(req.params.id) });
    if (!user) return res.status(404).send("User not found!");
    res.json(user);
  } catch (err) {
    res.status(500).send("Server error while fetching user.");
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
