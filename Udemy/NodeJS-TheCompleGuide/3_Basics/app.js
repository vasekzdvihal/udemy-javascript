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
const fs = require('fs');


const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html lang="en">');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');
    res.write(' <form action="/message" method="POST">')
    res.write('  <input type="text" name="message"><button type="submit">Send</button>')
    res.write(' </form>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    })


    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html lang="en">');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
