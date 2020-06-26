const express = require('express');
const path = require('path');
const router = express.Router();
const schoolController = require('../controllers/school');

router.get('/', schoolController.getIndex);
router.get('/forums', schoolController.getThread);
router.get('/add-thread', schoolController.getAddThread);

module.exports = router;
