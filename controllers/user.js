const path = require('path');
const pool = require('../config/db');

const AddedPage = (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'added-user.html'));
};

const UsersPage = async (req, res) => {
	try {
		const newUsers = await pool.query(
			`
		INSERT INTO user_info (username, age) VALUES ($1,$2)
		`,
			[req.body.username, req.body.age]
		);
		res.redirect('/');
		console.log(newUsers);
	} catch (error) {
		console.log(error);
	}
};

const UptedUserPage = async (req, res) => {
	try {
		const user = await pool.query('SELECT * FROM user_info WHERE id = $1', [req.params.id]);
		res.render('edit-user', {
			title: 'edit-user',
			user: user.rows[0],
		});
	} catch (error) {
		console.log(error);
	}
};
const UptedUser = async (req, res) => {
	try {
		await pool.query('UPDATE user_info SET username = $1, age = $2 WHERE id = $3', [
			req.body.username,
			req.body.age,
			req.params.id,
		]);
		res.redirect('/');
	} catch (error) {
		console.log(error);
	}
};

const DelteUser = async (req, res) => {
	try {
		await pool.query('DELETE FROM user_info WHERE id = $1', [req.params.id]);
		res.redirect('/');
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	AddedPage,
	UsersPage,
	UptedUserPage,
	UptedUser,
	DelteUser,
};
