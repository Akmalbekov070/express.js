const express = require('express');
const router = express.Router();
const { MainPage, getUserPageId } = require('../controllers/main');

router.get('/', MainPage);
router.get('/:id', getUserPageId);

module.exports = router;
