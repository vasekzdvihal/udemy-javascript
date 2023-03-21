// Core modules
// http (web server) -> Launch a server, send requests, get responses
// https (secure http) -> Launch a server, send requests, get responses (secure)
// fs (file system) -> Read and write files
// path (cross-platform) -> Get path to files and directories
// os (operating system) -> Get info about the operating system

// require() is a function that allows us to import modules into our file
// ./ - relative path
// / - absolute path
// just the name - core module
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
