const fs = require('fs');

const requestHandler = (req, res) => {
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
      fs.writeFile('_temp/message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html lang="en">');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
}

// module.exports = requestHandler;

// You can have just one module.exports in a file
module.exports = {
  handler: requestHandler,
  someText: 'Some hard coded text'
}

// Same as above
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';
