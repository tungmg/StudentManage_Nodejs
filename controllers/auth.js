var md5 = require('md5');
let User = require('../models/user');

exports.getRegist = (req, res) => {
	res.render('auth/regist');
};

exports.postRegist = (req, res) => {
	const username = req.body.username;
	const password = md5(req.body.password);
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const dob = req.body.dob;
	const pob = req.body.pob;
	const gender = req.body.gender;

	User.findAll()
		.then(result => {
			let kt = 0;
			for (user of result) {
				if (user.username == username) {
					kt = 1;
				}

				if (kt == 0) {
					User.create({
						username: username,
						password: password,
						firstname: firstname,
						lastname: lastname,
						dob: dob,
						pob: pob,
						gender: gender
					})
						.then(result => {
							res.redirect('login');
						})
						.catch(error => console.log(error));
				} else {
					res.redirect('regist');
				}
			}
		})
		.catch(error => console.log(error));
};

exports.getLogin = (req, res) => {
	res.render('auth/login');
};

exports.postLogin = (req, res) => {
	const username = req.body.username;
	const password = md5(req.body.password);
	User.findAll()
		.then(result => {
			for (user of result) {
				if (user.username == username && user.password == password) {
					res.redirect('home');
				} else res.render('auth/login-error');
				// else return -1;
			}
		})
		.catch(error => console.log(error));
};
