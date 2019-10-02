let express = require('express');
let router = express.Router();

const subjectController = require('../controllers/subject');

router.get('/subjects-list', subjectController.getAllSubject);

module.exports = router;
