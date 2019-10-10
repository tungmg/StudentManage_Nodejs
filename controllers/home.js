exports.homeForm = (req, res, next) => {
	res.render('home', {
		pageTitle: 'Home'
	});
};
