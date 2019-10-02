let Subject = require('../models/subject');

exports.getAllSubject = (req, res, next) => {
	Subject.fetchAll(subjectsList => {
		res.render('subjects/subjects-list', {
			subjectsList: subjectsList,
			pageTitle: 'Subjects List'
		});
	});
};

exports.addSubject = (req, res, next) => {
	Subject.save();
};
