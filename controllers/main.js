const { users } = require('./user');

const MainPage = (req, res) => {
	res.render('main', {
		title: 'user list',
		users,
	});
};

module.exports = {
	MainPage,
};
