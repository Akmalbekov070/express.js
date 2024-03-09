const pool = require('../config/db');
const User = require('../models/users');

const MainPage = async (req, res) => {
	try {
		const users = await User.findAll();
		res.render('main', {
			title: 'User list',
			users: users,
		});
	} catch (error) {
		console.log(error);
	}
};

const getUserPageId = async (req, res) => {
	try {
		const user = await User.findByid(req.params.id);
		res.render('page-user', {
			title: user.username,
			user: user,
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	MainPage,
	getUserPageId,
};
