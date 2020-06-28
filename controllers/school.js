const Student = require('../models/student');
const Thread = require('../models/thread');
const sequelize = require('../utils/database');

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
   Thread.findByPk(2)
      .then((thread) => {
         b = thread.get({ plain: true });
         Student.findByPk(b.studentId).then((result) => {
            // console.log(result.name);
            console.log(thread.content);
         });
      })
      // .then((result) => {
      //    b = result.get({ plain: true });
      //    Student.findByPk(b.studentId);
      //    console.log(result.name);
      // })
      .catch((err) => console.log(err));
};

// res.render('school/forum', {
//    threads: threads,
//    pageTitle: 'Forum',
//    path: '/forum',
// });

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
