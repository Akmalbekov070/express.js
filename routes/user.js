const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/added-user.html', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'added-user.html'));
});

router.post('/users', (req, res) => {
	console.log(req.body);
	res.send(req.body);
	res.redirect('/');
});

module.exports = router;
