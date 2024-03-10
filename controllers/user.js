const path = require('path');
const pool = require('../config/db');
const User = require('../models/users');

const AddedPage = (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'added-user.html'));
};

const UsersPage = async (req, res) => {
	try {
		const newUser = new User(req.body.username, req.body.age);
		await newUser.save();
		res.redirect('/');
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
		await User.findByUpdate(req.params.id, req.body.username, req.body.age);
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
