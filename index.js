const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
//pug=======================
// app.set('view engine', 'pug');
//handlebars===========
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
//ejs=============
// app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const useRoutes = require('./routes/user');
const useMain = require('./routes/main');
app.use(useRoutes.router);
app.use(useMain);

app.use((req, res) => {
	res.status(404).render('404', { title: 'Page not found' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('port has benn start');
});

//shablanizator
