var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'student_manage_php'
});

module.exports = con;
