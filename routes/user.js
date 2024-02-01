const express = require('express');
const router = express.Router();

router.get('/new-add', (req, res) => {
	res.send(`
     <form action="/users" method="POST">
     <input type="text" name="username" >
     <input type="number" name="age">
     <button>send</button>
     </form> 
  `);
});

router.post('/users', (req, res) => {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;
