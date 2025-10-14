const express = require("express");
const app = express();
const PORT = 2831;

let users = [
  { id: 1, name: "Kalai", email: "kalai@gmail.com", role: "admin" },
  { id: 2, name: "Bun", email: "bun@gmail.com", role: "user" },
  { id: 3, name: "Vijay", email: "vijay@gmail.com", role: "user" },
  { id: 4, name: "Anu", email: "anu@gmail.com", role: "editor" },
];

app.get("/users", (req, res) => {
  let { search, sort, filter } = req.query;
  let result = [...users];

  // Search by name or email
  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      (u) =>
        u.name.toLowerCase().includes(keyword) ||
        u.email.toLowerCase().includes(keyword)
    );
  }

  // Filter by role (e.g., ?filter=user)
  if (filter) {
    result = result.filter(
      (u) => u.role.toLowerCase() === filter.toLowerCase()
    );
  }

  // Sort by name or id
  if (sort) {
    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "id") {
      result.sort((a, b) => a.id - b.id);
    }
  }

  // Return results
  res.json({
    total: result.length,
    users: result,
  });
});

// Add User via URL
// Example: /write?id=5&name=Kavi&email=kavi@gmail.com&role=user
app.get("/write", (req, res) => {
  const { id, name, email, role } = req.query;

  if (!id || !name || !email || !role) {
    return res
      .status(400)
      .send("Missing id, name, email, or role parameters!");
  }

  const exists = users.some((u) => u.id === parseInt(id));
  if (exists) {
    return res.status(400).send("User ID already exists!");
  }

  const newUser = { id: parseInt(id), name, email, role };
  users.push(newUser);

  res.send(`User added successfully!<br><br>
    <b>ID:</b> ${id}<br>
    <b>Name:</b> ${name}<br>
    <b>Email:</b> ${email}<br>
    <b>Role:</b> ${role}`);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
