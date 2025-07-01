const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const errorController = require('./controllers/error');
const path = require('path');
const router = express.Router();
const sequelize = require('./utils/database');
const User = require('./models/user');
const Student = require('./models/student');
const Thread = require('./models/thread');
app.use(router);

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use(Student);

adminRoutes = require('./routes/admin');
schoolRoutes = require('./routes/school');

app.use(
   bodyParser.urlencoded({
      extended: false,
   })
);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(schoolRoutes);

// sequelize.sync({ force: true });
sequelize
   .sync()
   .then((result) => {
      return Student.findByPk(1);
   })
   .then((student) => {
      if (!student) {
         return Student.create({
            name: 'fauzi2',
            address: 'surabaya',
         });
      }
      return student;
   })
   .then(() => {})
   .catch((err) => console.log(err));
app.listen(5000);

Student.hasMany(Thread, { onDelete: 'CASCADE', constraints: true });
Thread.belongsTo(Student);


//haloo
