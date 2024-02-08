const express = require('express');
const router = express.Router();
const path = require('path');
const users = [];

router.get('/added-user.html', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'added-user.html'));
});

router.post('/users', (req, res) => {
	arrayUsers.push({ username: req.body.username, age: req.body.age });
	res.redirect('/');
});

exports.router = router;
exports.arrayUsers = users;
