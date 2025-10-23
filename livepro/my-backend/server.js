const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3101;

// Enable CORS for React frontend
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const filePath = path.join(__dirname, "expdata.json");

function readData() {
  if (!fs.existsSync(filePath))
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  const data = fs.readFileSync(filePath, "utf8");
  try {
    return JSON.parse(data || "[]");
  } catch {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET all users (with search, sort, filter)
app.get("/users", (req, res) => {
  let { search, sort, filter } = req.query;
  let users = readData();
  let result = [...users];

  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      (u) =>
        u.name.toLowerCase().includes(keyword) ||
        u.email.toLowerCase().includes(keyword)
    );
  }

  if (filter) {
    result = result.filter(
      (u) => u.role.toLowerCase() === filter.toLowerCase()
    );
  }

  if (sort) {
    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "id") {
      result.sort((a, b) => a.id - b.id);
    }
  }

  res.json({ users: result });
});

// Add new user
app.get("/write", (req, res) => {
  const { id, name, email, role } = req.query;

  if (!id || !name || !email || !role) {
    return res.status(400).send("Missing id, name, email, or role parameters!");
  }

  const users = readData();
  const exists = users.some((u) => u.id === parseInt(id));

  if (exists) {
    return res.status(400).send("User ID already exists!");
  }

  const newUser = { id: parseInt(id), name, email, role };
  users.push(newUser);
  writeData(users);

  res.send(`User added successfully!<br><br>
    <b>ID:</b> ${id}<br>
    <b>Name:</b> ${name}<br>
    <b>Email:</b> ${email}<br>
    <b>Role:</b> ${role}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
