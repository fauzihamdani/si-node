const Student = require('../models/student');
const Thread = require('../models/thread');

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

exports.getThread = (req, res, next) => {
  Thread.findAll()
    .then((threads) => {
      res.render('school/forum', {
        threads: threads,
        pageTitle: 'Forum',
        path: '/forum',
      });
    })
    .catch((err) => console.log(err));
};

exports.getAddThread = (req, res, next) => {
  res.render('school/add-thread', {
    pageTitle: 'Add Thread',
    path: '/add-thread',
  });
};
