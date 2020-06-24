const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/add-student', adminController.getAddStudent);
router.post('/add-student', adminController.postAddStudent);
router.get('/students', adminController.getStudents);
router.get('/edit-student/:studentId', adminController.getEditStudent);
router.post('/edit-student', adminController.postEditStudent);
router.post('/delete-student', adminController.deleteStudent);
module.exports = router;
