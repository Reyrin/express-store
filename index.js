const express = require('express');
const exhbs = require('express-handlebars');

const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');

const app = express();

const hbs = exhbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use('/', homeRoutes);
app.use('/add', coursesRoutes);
app.use('/courses', addRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Port ${PORT}`);
});