// server.js
const express = require('express');
const app = express();
const PORT = 8000; // Changed from 5000 to 8000

app.use(express.json());

let users = [
  { id: 1, name: "Kalai", email: "kalai@example.com" },
  { id: 2, name: "John", email: "john@example.com" }
];

// Routes
app.get('/', (req, res) => res.send('Welcome 🚀'));
app.get('/users', (req, res) => res.json(users));
app.get('/users/:id', (req, res) => {
  const u = users.find(x => x.id === +req.params.id);
  u ? res.json(u) : res.status(404).send('User not found');
});
app.post('/users', (req, res) => {
  const u = { id: users.length + 1, ...req.body };
  users.push(u);
  res.status(201).json(u);
});
app.put('/users/:id', (req, res) => {
  const u = users.find(x => x.id === +req.params.id);
  if (!u) return res.status(404).send('User not found');
  Object.assign(u, req.body);
  res.json(u);
});
app.delete('/users/:id', (req, res) => {
  users = users.filter(x => x.id !== +req.params.id);
  res.send('User deleted');
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
