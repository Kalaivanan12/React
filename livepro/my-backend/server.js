const http = require('http');
const fs = require('fs');
const path = require('path');
const urlModule = require('url');

const PORT = 2831;
const filePath = path.join(__dirname, 'data.json');

// =============================
// Helper functions
// =============================
function readData() {
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  const data = fs.readFileSync(filePath, 'utf8');
  try {
    return JSON.parse(data || '[]');
  } catch {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// =============================
// HTTP Server
// =============================
const server = http.createServer((req, res) => {
  const urlObj = urlModule.parse(req.url, true);
  const { pathname, query } = urlObj;

  // Home
  if (pathname === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Welcome to Backend Page with JSON FS!');
  }

  // Add new user
  if (pathname === '/write' && req.method === 'GET') {
    const { id, name, email } = query;

    if (!id || !name || !email) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('❌ Missing id, name, or email');
    }

    const data = readData();

    const exists = data.find(u => u.id === parseInt(id));
    if (exists) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end(`❌ User with ID ${id} already exists`);
    }

    const newUser = { id: parseInt(id), name, email };
    data.push(newUser);
    writeData(data);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end(`✅ User added successfully!\nID: ${newUser.id}\nName: ${newUser.name}\nEmail: ${newUser.email}`);
  }

  // Get all users with search and sort
  if (pathname === '/users' && req.method === 'GET') {
    let data = readData();

    if (query.search) {
      const term = query.search.toLowerCase();
      data = data.filter(u =>
        u.name.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term)
      );
    }

    if (query.sort) {
      const sortKey = query.sort.toLowerCase();
      const order = query.order === 'desc' ? -1 : 1;
      data.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return -1 * order;
        if (a[sortKey] > b[sortKey]) return 1 * order;
        return 0;
      });
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(data, null, 2));
  }

  // ✅ Get single user by ID — e.g. /users/10
  if (pathname.startsWith('/users/') && req.method === 'GET') {
    const id = parseInt(pathname.split('/')[2]);
    const data = readData();
    const user = data.find(u => u.id === id);

    if (user) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(user, null, 2));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end(`❌ User with ID ${id} not found`);
    }
  }

  // Not found
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Route not found');
});

// =============================
// Start Server
// =============================
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
