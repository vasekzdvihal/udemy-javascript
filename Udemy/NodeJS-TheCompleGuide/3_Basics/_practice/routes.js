const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  // 2. Handle two different routes: "/" and "/users"
  //    Return some greeting text on "/"
  // 3. Add a form with a 'username' <input> to the "/" page and submit a POST request to "create-user" upon a button click
  if (url === '/') {
    res.write('<html lang="en">');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');
    res.write(' <h1>Hello from Practice!</h1>');
    res.write(' <form action="/create-user" method="POST">')
    res.write('  <input type="text" name="username"><button type="submit">Send</button>')
    res.write(' </form>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  //   Return a list of dummy users on "/users" (e.g. <ul><li>User 1</li></ul>)
  if (url === '/users') {
    res.write('<html lang="en">');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');
    res.write(' <ul>');
    res.write('  <li>User 1</li>');
    res.write('  <li>User 2</li>');
    res.write('  <li>User 3</li>');
    res.write(' </ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  // 4. Add the "/create-user" route and parse the incoming data (i.e. the username) and simply log it to the console
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const userName = parseBody.split('=')[1];
      console.log(userName);
    });
  }
}

module.exports = requestHandler;
