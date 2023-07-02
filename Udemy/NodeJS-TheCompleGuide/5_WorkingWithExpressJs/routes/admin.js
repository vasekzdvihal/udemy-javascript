const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

router.get('/add-product', (req, res,next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // Sends a response
  // We don't call next() here because we don't want to continue to the next middleware
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});


module.exports = router;
