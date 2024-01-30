const express = require('express');

const app = express();
app.use('/', (req, res, next) => {
	console.log('bu har doim ishlaydi');
	next();
});
app.use('/users', (req, res, next) => {
	res.send('<h1>Keyingi sahifa</h1>');
});

app.use('/', (req, res, next) => {
	res.send('<h1>Bosh sahifa</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('port has benn start');
});
