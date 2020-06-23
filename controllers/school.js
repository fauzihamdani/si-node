const Student = require('../models/student');

exports.getIndex = (req, res, next) => {
  Student.findAll()
    .then((students) => {
      res.render('school/index', {
        students: students,
        pageTitle: 'My School',
        path: '/',
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
