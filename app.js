const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const errorController = require('./controllers/error');
const path = require('path');
const router = express.Router();
const sequelize = require('./utils/database');

app.use(router);

app.set('view engine', 'ejs');
app.set('views', 'views');

//adminRoutes = require('./routes/admin');
schoolRoutes = require('./routes/school');

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
//app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
app.use(schoolRoutes);

// app.use(errorController.get404);
sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
