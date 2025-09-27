const http = require('http');

let users = [
    { id: 1, name: "Kalai", email: "kalai@example.com", phone: "8870051316" },
    { id: 2, name: "Vini", email: "vini@example.com", phone: "9361688365" },
    { id: 3, name: "Kamalu", email: "kamalu@example.com", phone: "9952793382" },
    { id: 4, name: "Kala", email: "kala@example.com", phone: "8489199088" }
];

const PORT = 2831;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

   
    const parseBody = async () => {
        return new Promise((resolve, reject) => {
            let body = '';
            req.on('data', chunk => body += chunk.toString());
            req.on('end', () => resolve(JSON.parse(body || '{}')));
            req.on('error', err => reject(err));
        });
    };

   
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to Backend Page !!!!');
    }

   
    if (url === '/users' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(users));
    }

   
    if (url.startsWith('/users/') && method === 'GET') {
        const id = parseInt(url.split('/')[2]);
        const user = users.find(u => u.id === id);
        if (user) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(user));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('User not found');
        }
    }

  
    if (url === '/users' && method === 'POST') {
        parseBody().then(body => {
            const user = { id: users.length + 1, ...body };
            users.push(user);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        }).catch(err => {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Invalid JSON');
        });
        return;
    }

   
    if (url.startsWith('/users/') && method === 'PUT') {
        const id = parseInt(url.split('/')[2]);
        const user = users.find(u => u.id === id);
        if (!user) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('User not found');
        }
        parseBody().then(body => {
            Object.assign(user, body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        }).catch(err => {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Invalid JSON');
        });
        return;
    }

   
    if (url.startsWith('/users/') && method === 'DELETE') {
        const id = parseInt(url.split('/')[2]);
        users = users.filter(u => u.id !== id);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('User deleted');
    }


    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
