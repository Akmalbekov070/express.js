const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('<h1>Bosh sahifa</h1>');
});

module.exports = router;
