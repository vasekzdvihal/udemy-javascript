const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', (req, res,next) => {
  next(); // Allows the request to continue to the next middleware in line
  // We call next() here because we want to continue to the next middleware (and this will be call for every request)
});

app.use('/add-product', (req, res,next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  // We don't call next() here because we don't want to continue to the next middleware
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>'); // Sends a response
});

app.listen(3000); // Starts a server on port 3000 => http://localhost:3000/
