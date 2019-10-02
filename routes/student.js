let express = require('express');
let router = express.Router();

const studentController = require('../controllers/student');
router.get('/students-list', studentController.getAllStudent);

module.exports = router;
