const http = require('http');
const fs = require('fs');
const path = require('path');
const urlModule = require('url');

const PORT = 2831;
const filePath = path.join(__dirname, 'data.json');

function readData() {
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify([], null, 2));
  const data = fs.readFileSync(filePath, 'utf8');
  try {
    return JSON.parse(data || '[]');
  } catch (err) {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
  const urlObj = urlModule.parse(req.url, true);
  const { pathname, query } = urlObj;


  if (pathname === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Welcome to Backend Page with JSON FS!');
  }


  if (pathname === '/write' && req.method === 'GET') {
    const { id, name, email } = query;

    if (!id || !name || !email) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end(' Missing id, name, or email');
    }

    const data = readData();


    const exists = data.find(u => u.id === parseInt(id));
    if (exists) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end(` User with ID ${id} already exists`);
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


  if (pathname === '/users' && req.method === 'GET') {
    const data = readData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(data));
  }


  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Route not found');
});

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
