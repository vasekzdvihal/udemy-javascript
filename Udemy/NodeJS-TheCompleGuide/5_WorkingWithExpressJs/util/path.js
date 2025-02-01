const path = require('path');

module.exports = path.dirname(process.mainModule.filename); // Returns the path of the main module (app.js)
