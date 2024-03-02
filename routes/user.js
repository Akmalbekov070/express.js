const express = require('express');
const router = express.Router();
const users = [];
const { AddedPage, UsersPage, UptedUserPage, UptedUser } = require('../controllers/user');

router.get('/added-user.html', AddedPage);
router.get('/edit/:id', UptedUserPage);

router.post('/edit/:id', UptedUser);
router.post('/users', UsersPage);

exports.router = router;
exports.users = users;
