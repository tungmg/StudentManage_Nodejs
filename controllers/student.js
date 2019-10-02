const Student = require('../models/student');

exports.getAllStudent = (req, res, next) => {
	Student.fetchAll(studentsList => {
		res.render('students/students-list', {
			studentsList: studentsList,
			pageTitle: 'Students List'
		});
	});
};
