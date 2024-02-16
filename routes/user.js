const express = require('express');
const router = express.Router();
const users = [];
const { AddedPage, UsersPage } = require('../controllers/user');

router.get('/added-user.html', AddedPage);

router.post('/users', UsersPage);

exports.router = router;
exports.users = users;
