const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('middleweare 1');
	next();
});
app.use((req, res, next) => {
	console.log('middleweare 2');
	res.send('<h1>salomlar</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('port has benn start');
});
