const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'senhaMysql', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
