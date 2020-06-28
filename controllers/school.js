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
   Student.findAll({ attributes: ['id'] })
      .then(
         Thread.findAll().then((threads) => {
            res.render('school/forum', {
               threads: threads,
               pageTitle: 'Forum',
               path: '/forum',
            });
         })
      )
      .catch((err) => {
         console.log(err);
      })

      .catch((err) => console.log(err));
};

exports.getAddThread = (req, res, next) => {
   Student.findAll()
      .then((students) => {
         res.render('school/add-thread', {
            students: students,
            pageTitle: 'Add Thread',
            path: '/add-thread',
            editing: false,
         });
      })
      // .then((result) => {
      //   console.log(result);
      // })
      .catch((err) => {
         console.log(err);
      });
};

exports.postAddThread = (req, res, next) => {
   const content = req.body.content;
   const studentId = req.body.studentId;

   Thread.create({
      content: content,
      studentId: studentId,
   }).then((result) => {
      return res.redirect('/forums');
   });
};
