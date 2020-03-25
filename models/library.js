'use strict';
import { DataTypes } from "sequelize";


const Library = sequelize.define('Library', {
    name: DataTypes.STRING,
}, {});

module.exports = {
    Library,
};
