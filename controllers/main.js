const User = require('../models/users');

const MainPage = (req, res) => {
	res.render('main', {
		title: 'user list',
		users,
	});
};

module.exports = {
	MainPage,
};
