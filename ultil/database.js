const Sequelize = require('sequelize');

const sequelize = new Sequelize('student_manage_php', 'root', '', {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;
