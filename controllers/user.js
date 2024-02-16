const users = [];
const path = require('path');

const AddedPage = (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'added-user.html'));
};

const UsersPage = (req, res) => {
	users.push({ username: req.body.username, age: req.body.age });
	res.redirect('/');
};

module.exports = {
	AddedPage,
	UsersPage,
	users,
};
