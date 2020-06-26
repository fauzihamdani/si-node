const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Thread = require('../models/thread');

const Student = sequelize.define('student', {
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
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  // .sync({ force: true })
  .then((result) => {
    return Student.findByPk(4);
  })
  .then((student) => {
    if (!student) {
      return Student.create({
        name: 'fauzi2',
        address: 'Kedunganyar 8',
      });
    }
    return student;
  })
  .catch((err) => console.log(err));

Student.hasMany(Thread, { onDelete: 'CASCADE' });
module.exports = Student;
