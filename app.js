const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();
const studentRoutes = require('./routes/student');
const subjectRoutes = require('./routes/subject');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(studentRoutes);
app.use(subjectRoutes);

// var mysql = require('mysql');

// var con = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'student_manage_php'
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query('SELECT fullname, dob, pob, gender FROM tblaccount WHERE role!="admin"', function(err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

app.listen(8080);
