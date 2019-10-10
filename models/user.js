const Sequelize = require('sequelize');

const sequelize = require('../ultil/database');

const User = sequelize.define('tbluser', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	firstname: Sequelize.STRING,
	lastname: Sequelize.STRING,
	dob: Sequelize.STRING,
	pob: Sequelize.STRING,
	gender: Sequelize.STRING
});

module.exports = User;
