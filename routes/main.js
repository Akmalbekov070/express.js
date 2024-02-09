const express = require('express');
const router = express.Router();
const path = require('path');

const { users } = require('./user');

router.get('/', (req, res) => {
	console.log(users);
	res.render('main', {
		title: 'user list',
		users: users,
	});
});

module.exports = router;
