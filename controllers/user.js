const path = require('path');
const User = require('../models/users');

const AddedPage = (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'added-user.html'));
};

const UsersPage = (req, res) => {
	const users = new User(req.body.username, req.body.age);
	users.save();
	res.redirect('/');
};

module.exports = {
	AddedPage,
	UsersPage,
};
