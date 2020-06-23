const Sequelize = require('sequelize');

const sequelize = new Sequelize('sekolah', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
