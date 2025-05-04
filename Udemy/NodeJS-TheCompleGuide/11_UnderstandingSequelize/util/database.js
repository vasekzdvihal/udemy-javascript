const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'surveyor-GERMANY-ulrich-cardigan', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
