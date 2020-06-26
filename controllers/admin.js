const Student = require('../models/student');
const Thread = require('../models/thread');

exports.getAddStudent = (req, res, next) => {
  res.render('admin/edit-student', {
    pageTitle: 'Add Student',
    path: '/admin/add-student',
    editing: false,
  });
};

exports.postAddStudent = (req, res, next) => {
  const name = req.body.name;
  const address = req.body.address;

  Student.create({
    name: name,
    address: address,
  })
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};

exports.getStudents = (req, res, next) => {
  Student.findAll()
    .then((students) => {
      res.render('admin/students', {
        students: students,
        pageTitle: 'Admin Students',
        path: '/admin/students',
      });
    })
    .catch((err) => console.log(err));
};

exports.getEditStudent = (req, res, next) => {
  const editMode = req.query.editStudent;
  if (!editMode) {
    return res.redirect('/');
  }
  const studentId = req.params.studentId;
  Student.findByPk(studentId)
    .then((student) => {
      if (!student) {
        return res.redirect('/');
      }
      res.render('admin/edit-student', {
        pageTitle: 'Edit Student',
        path: '/admin/edit-product',
        editing: editMode,
        student: student,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditStudent = (req, res, next) => {
  const studentId = req.body.studentId;
  const updatedName = req.body.name;
  const updatedAddress = req.body.address;
  Student.findByPk(studentId)
    .then((student) => {
      student.name = updatedName;
      student.address = updatedAddress;
      return student.save();
    })
    .then((result) => {
      console.log('Student Updated');
      res.redirect('/admin/students');
    })
    .catch((err) => console.log(err));
};

exports.deleteStudent = (req, res, next) => {
  const studentId = req.body.studentId;
  Student.findByPk(studentId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log('1 product has deleted');
      res.redirect('/admin/students');
    })
    .catch((err) => {
      console.log(err);
    });
};
