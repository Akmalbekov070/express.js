const pool = require('../config/db');
const User = require('../models/users');

const MainPage = async (req, res) => {
	try {
		const users = await pool.query('SELECT * FROM user_info');
		res.render('main', {
			title: 'User list',
			users: users.rows,
		});
	} catch (error) {
		console.log(error);
	}
};

const getUserPageId = async (req, res) => {
	try {
		const user = await pool.query('SELECT * FROM user_info WHERE id = $1', [req.params.id]);
		res.render('page-user', {
			title: user.rows[0].username,
			user: user.rows[0],
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	MainPage,
	getUserPageId,
};
