const express = require("express");
const cors = require("cors"); // <--- import cors
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3101;

// Enable CORS for all routes
app.use(cors());

// For JSON parsing
app.use(express.json());

const filePath = path.join(__dirname, "expdata.json");

function readData() {
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

// Example GET route
app.get("/users", (req, res) => {
  const users = readData();
  res.json(users);
});

// Example write route
app.get("/write", (req, res) => {
  const users = readData();
  users.push(req.query);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.json({ message: "User added!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
