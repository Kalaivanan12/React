const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 2831;

// Path to JSON file
const filePath = path.join(__dirname, 'data.json');

// =============================
// Helper Functions
// =============================
function readData() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2)); // create if not exist
  }
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data || '[]');
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

// =============================
// HTTP Server
// =============================
const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  // Home
  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Welcome to Backend Page with JSON FS!');
  }

  // GET all users
  if (url === '/users' && method === 'GET') {
    const data = readData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(data));
  }

  // GET user by ID
  if (url.startsWith('/users/') && method === 'GET') {
    const id = parseInt(url.split('/')[2]);
    const data = readData();
    const item = data.find(u => u.id === id);
    if (item) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('User not found');
    }
  }

  // POST → Add new user or Update existing user
  if (url === '/users' && method === 'POST') {
    try {
      const body = await parseBody(req);
      const data = readData();

      if (body.id) {
        // Update existing user
        const item = data.find(u => u.id === body.id);
        if (!item) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          return res.end('User not found');
        }
        Object.assign(item, body);
        writeData(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(item));
      } else {
        // Add new user
        const newItem = { id: data.length + 1, ...body };
        data.push(newItem);
        writeData(data);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(newItem));
      }

    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('Invalid JSON');
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
