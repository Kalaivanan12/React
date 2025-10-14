const express = require("express");
const app = express();
const PORT = 2831;

let users = [
  { id: 1, name: "Kalai", email: "kalai@gmail.com" },
  { id: 2, name: "Bun", email: "Bun@gmail.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/write", (req, res) => {
  const { id, name, email } = req.query;

  if (!id || !name || !email) {
    return res.status(400).send("Missing id, name, or email parameters!");
  }

  
  const exists = users.some((u) => u.id === parseInt(id));
  if (exists) {
    return res.status(400).send("User ID already exists!");
  }

  const newUser = { id: parseInt(id), name, email };
  users.push(newUser);

  res.send(`User added successfully!<br><br>
    <b>ID:</b> ${id}<br>
    <b>Name:</b> ${name}<br>
    <b>Email:</b> ${email}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
