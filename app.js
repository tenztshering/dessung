const http = require('http');

const ip = "127.0.0.1";
const port = 3000;              // port can be any above 1024

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from server. This is ANONYMOUS');
});

server.listen(port, ip, () => console.log('server running...'));
