const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  // .sync({ force: true })
  .then((result) => {
    return User.findByPk(27);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: 'fauzi',
        email: 'fauziham93@gmail.com',
      });
    }
    return user;
  })
  .catch((err) => console.log(err));

module.exports = User;
