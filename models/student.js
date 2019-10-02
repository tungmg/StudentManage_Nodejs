var con = require('../connect');

let getStudentsFromDatabase = callBack => {
	con.connect(function(err) {
		if (err) throw err;
		con.query('SELECT * FROM tblaccount WHERE role!="admin"', function(err, result, fields) {
			if (err) throw err;
			callBack(result);
		});
	});
};

module.exports = class Student {
	constructor(fullname, dob, pob, gender) {
		this.fullname = fullname;
		this.dob = dob;
		this.pob = pob;
		this.gender = gender;
	}

	static fetchAll(callBack) {
		getStudentsFromDatabase(callBack);
	}
};
