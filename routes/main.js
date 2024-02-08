const express = require('express');
const router = express.Router();
const path = require('path');

const { users } = require('./user');

router.get('/', (req, res) => {
	res.render('main', {
		title: 'user list',
		users,
	});
});

module.exports = router;
