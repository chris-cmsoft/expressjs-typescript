'use strict';
const sequelize = require('sequelize');
const dbClient = require('../database/connection');

const Library = dbClient.define('Library', {
    name: sequelize.DataTypes.STRING,
}, {});

console.log(Library)

module.exports = {
    Library,
};
