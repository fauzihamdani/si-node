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
   .then((student) => {
      if (!student) {
         return Student.create({
            name: 'fauzi2',
            address: 'surabaya',
         });
      }
      return student;
   })
   .catch((err) => console.log(err));

Student.hasMany(Thread, { onDelete: 'CASCADE' });
Thread.belongsTo(Student);
module.exports = Student;
