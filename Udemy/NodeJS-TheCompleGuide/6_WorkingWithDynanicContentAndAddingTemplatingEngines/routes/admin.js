const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // Sends a response
  // We don't call next() here because we don't want to continue to the next middleware
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});


exports.routes = router;
exports.products = products;

