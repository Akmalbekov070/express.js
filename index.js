const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const useRoutes = require('./routes/user');
const useMain = require('./routes/main');
app.use(useRoutes);
app.use(useMain);

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, 'views', 'notFound.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('port has benn start');
});
