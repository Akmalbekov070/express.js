const User = require('../models/users');

const MainPage = (req, res) => {
	const users = User.findAll();
	res.render('main', {
		title: 'user list',
		users,
	});
};

module.exports = {
	MainPage,
};
