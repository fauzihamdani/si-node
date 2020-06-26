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
app.listen(5000);
