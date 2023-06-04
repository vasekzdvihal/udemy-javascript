const http = require('http');
const express = require('express');

const app = express();

app.use('/', (req, res,next) => {
  console.log('This always runs!');
  next(); // Allows the request to continue to the next middleware in line
  // We call next() here because we want to continue to the next middleware (and this will be call for every request)
});

app.use('/add-product', (req, res,next) => {
  console.log('Add product middleware!');
  res.send('<h1>The add product page</h1>');
  // We don't call next() here because we don't want to continue to the next middleware
});

app.use('/', (req, res,next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>'); // Sends a response
});

app.listen(3000); // Starts a server on port 3000 => http://localhost:3000/
