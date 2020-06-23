const express = require('express');
const path = require('path');
const router = express.Router();
const schoolController = require('../controllers/school');

router.get('/', schoolController.getIndex);

module.exports = router;
