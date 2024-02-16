const express = require('express');
const router = express.Router();
const { MainPage } = require('../controllers/main');

router.get('/', MainPage);

module.exports = router;
