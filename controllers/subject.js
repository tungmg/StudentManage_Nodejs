let Subject = require('../models/subject');

exports.getAllSubject = (req, res, next) => {
	Subject.findAll()
		.then(subjectsList => {
			res.render('subjects/subjects-list', {
				subjectsList: subjectsList,
				pageTitle: 'Subjects List'
			});
		})
		.catch(error => console.log(error));
};

exports.addSubject = (req, res, next) => {
	const name = req.body.name;
	const noc = req.body.noc;
	const pod = req.body.pod;
	const pot = req.body.pot;
	const poe = req.body.poe;
	const pop = req.body.pop;
	const pofe = req.body.pofe;
	Subject.create({
		name: name,
		noc: noc,
		pod: pod,
		pot: pot,
		poe: poe,
		pop: pop,
		pofe: pofe
	})
		.then(result => {
			res.redirect('/subjects-list');
		})
		.catch(error => console.log(error));
};

exports.getEditSubject = (req, res, next) => {
	const subjectId = req.params.subjectId;
	Subject.findAll({
		where: {
			id: subjectId
		}
	}).then(subjects => {
		res.render('subjects/edit-subject', {
			pageTitle: 'Sửa',
			subject: subjects[0]
		});
		console.log(subject.name);
	});
};

exports.editSubject = (req, res, next) => {
	const id = req.params.subjectId;
	const updatedName = req.body.name;
	const updatedNoc = req.body.noc;
	const updatedPod = req.body.pod;
	const updatedPot = req.body.pot;
	const updatedPoe = req.body.poe;
	const updatedPop = req.body.pop;
	const updatedPofe = req.body.pofe;
	Subject.findAll({
		where: {
			id: id
		}
	})
		.then(subject => {
			subject[0].name = updatedName;
			subject[0].noc = updatedNoc;
			subject[0].pod = updatedPod;
			subject[0].pot = updatedPot;
			subject[0].poe = updatedPoe;
			subject[0].pop = updatedPop;
			subject[0].pofe = updatedPofe;
			return subject[0].save();
		})
		.then(result => {
			res.redirect('/subjects-list');
		})
		.catch(error => console.log(error));
};

exports.postDeleteSubject = (req, res, next) => {
	const subjectId = req.body.subjectId;
	Subject.destroy({
		where: {
			id: subjectId
		}
	})
		.then(result => {
			console.log('DESTROYED STUDENT');
			res.redirect('subjects-list');
		})
		.catch(err => console.log(err));
};
