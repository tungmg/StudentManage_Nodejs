const express = require('express');
const parser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();
const router = express.Router();
// import sequelize

const sequelize = require('./ultil/database');

// import Route
const userRoutes = require('./routes/user');
const subjectRoutes = require('./routes/subject');
const home = require('./routes/home');
const auth = require('./routes/auth');
const chart = require('./routes/chart');
// body parse
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//passport

// ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// model
const User = require('./models/user');

// route
app.use(subjectRoutes);
app.use(userRoutes);
app.use(auth);
app.use(chart);
app.use(home);

app.use('/', (req, res) => {
	res.render('auth/login');
});
// sync database

sequelize
	.sync()
	.then()
	.catch(error => console.log(error));

app.listen(8080);

// var server = http.createServer(app).listen(port, function() {
// 	console.log('Express server listening ' + port);
// });

// server.on('error', function(err) {});
