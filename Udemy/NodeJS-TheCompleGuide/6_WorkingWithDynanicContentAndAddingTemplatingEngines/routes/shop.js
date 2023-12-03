const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.render('shop'); // Renders a template with the given template engine
});

module.exports = router;
