const pool = require('../config/db');
const User = require('../models/users');

const MainPage = async (req, res) => {
	try {
		const users = await pool.query('SELECT * FROM user_info');
		console.log(users);
		res.render('main', {
			title: 'User list',
			users: users.rows,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	MainPage,
};
