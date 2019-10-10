let User = require('../models/user');

exports.getMale = (req, res, next) => {
	User.count({
		where: {
			gender: 'Nam'
		}
	})
		.then(result1 => {
			User.count({
				where: {
					gender: 'Nu'
				}
			})
				.then(result2 => {
					res.render('chart', {
						soNu: result2,
						soNam: result1
					});
				})
				.catch(error => console.log(error));
		})
		.catch(error => console.log(error));
};
