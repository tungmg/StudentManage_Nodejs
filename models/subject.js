const Sequelize = require('sequelize');

const sequelize = require('../ultil/database');

const Subject = sequelize.define('tblsubject', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: Sequelize.STRING,
	noc: Sequelize.INTEGER,
	pod: Sequelize.INTEGER,
	pot: Sequelize.INTEGER,
	poe: Sequelize.INTEGER,
	pop: Sequelize.INTEGER,
	pofe: Sequelize.INTEGER
});

module.exports = Subject;
