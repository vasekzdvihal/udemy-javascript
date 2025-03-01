const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  
  save() {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent.toString());
      }

      products.push(this);
      fs.writeFile(p, JSON.stringify(products, null, 2), (error) => {
        console.log(error);
      });
    });
  }

  static fetchAll(callback) {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        callback([]); // We can throw error here, we want just empty array.
      }

      callback(JSON.parse(fileContent.toString()));
    });
  }
}
