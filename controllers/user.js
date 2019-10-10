let User = require('../models/user');

exports.getAllUser = (req, res, next) => {
	User.findAll()
		.then(usersList => {
			res.render('users/users-list', {
				usersList: usersList,
				pageTitle: 'Users List'
			});
		})
		.catch(error => console.log(error));
};

exports.postDeleteUser = (req, res, next) => {
	const userId = req.body.userId;
	User.destroy({
		where: {
			id: userId
		}
	})
		.then(result => {
			console.log('DESTROYED USER');
			res.redirect('users-list');
		})
		.catch(err => console.log(err));
};
