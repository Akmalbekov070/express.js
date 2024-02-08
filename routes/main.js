const express = require('express');
const router = express.Router();
const path = require('path');

const users = require('./user');

router.get('/', (req, res) => {
	console.log(users.arrayUsers);
	res.render('main', {
		title: 'user list',
		users,
	});
});

module.exports = router;
