const sequelize = require('sequelize');

const client = new sequelize.Sequelize('express-typescript', 'username', 'password', {
    host: 'localhost',
    port: '3307',
    dialect: 'mariadb',
});

module.exports = client;