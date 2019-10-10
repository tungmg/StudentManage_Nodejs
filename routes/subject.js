let express = require('express');
let router = express.Router();

const subjectController = require('../controllers/subject');

router.get('/subjects-list', subjectController.getAllSubject);

router.post('/subjects-list', subjectController.addSubject);

router.get('/edit-subject/:subjectId', subjectController.getEditSubject);

router.post('/edit-subject/:subjectId', subjectController.editSubject);

router.post('/delete-subject', subjectController.postDeleteSubject);

module.exports = router;
