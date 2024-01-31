const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
	next();
});
app.use('/New-users', (req, res, next) => {
	res.send(`
     <form action="/users" method="POST">
     <input type="text" name="username" >
     <input type="number" name="age">
     <button>send</button>
     </form> 
  `);
});

app.use('/users', (req, res, next) => {
	console.log(req.body.username);
	console.log(req.body.age);
	res.redirect('/');
});

app.use('/', (req, res, next) => {
	res.send('<h1>Bosh sahifa</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('port has benn start');
});
