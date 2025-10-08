const http = require('http');
const fs = require('fs');
const path = require('path');
const urlModule = require('url'); // parse query parameters

const PORT = 2831;
const filePath = path.join(__dirname, 'data.json');

// =============================
// Read & write helpers
// =============================
function readData() {
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  const data = fs.readFileSync(filePath, 'utf8');
  try {
    return JSON.parse(data || '[]');
  } catch (err) {
    return []; // fallback if JSON is corrupted
  }
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// =============================
// HTTP Server
// =============================
const server = http.createServer((req, res) => {
  const urlObj = urlModule.parse(req.url, true); // parse query
  const { pathname, query } = urlObj;

  // Home
  if (pathname === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Welcome to Backend Page with JSON FS!');
  }

  // Add new user via query parameters
  if (pathname === '/write' && req.method === 'GET') {
    const { id, name, email } = query;

    if (!id || !name || !email) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('❌ Missing id, name, or email');
    }

    const data = readData();

    // Check if ID already exists
    const exists = data.find(u => u.id === parseInt(id));
    if (exists) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end(`❌ User with ID ${id} already exists`);
    }

    const newUser = {
      id: parseInt(id),
      name,
      email
    };

    data.push(newUser);
    writeData(data);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end(`User added successfully!\nID: ${newUser.id}\nName: ${newUser.name}\nEmail: ${newUser.email}`);
  }

  // GET all users
  if (pathname === '/users' && req.method === 'GET') {
    const data = readData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(data));
  }

  // Not found
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Route not found');
});

// =============================
// Start Server
// =============================
server.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
