const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Thread = sequelize.define('thread', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Thread;
