var con = require('../connect');

let getSubjectFromDatabase = callBack => {
	con.connect(function(err) {
		if (err) throw err;
		con.query('SELECT * FROM tblsubject', function(err, result, fields) {
			if (err) throw err;
			callBack(result);
		});
	});
};

let addSubjectToDatabase = callBack => {
	con.connect(function(err) {
		if (err) throw err;
		console.log('Connected!');
		var sql = 'INSERT INTO tblsubject (name, noc, pod, pot, poe, pop, pofe) VALUES (name, noc, pod, pot, poe, pop, pofe)';
		con.query(sql, function(err, result) {
			if (err) throw err;
			callBack(result);
		});
	});
};

module.exports = class Subject {
	constructor(name, noc, pod, pot, poe, pop, pofe) {
		this.name = name;
		this.noc = noc;
		this.pod = pod;
		this.pot = pot;
		this.poe = poe;
		this.pop = pop;
		this.pofe = pofe;
	}

	static save() {
		addSubjectToDatabase(callBack);
	}

	static fetchAll(callBack) {
		getSubjectFromDatabase(callBack);
	}
};
