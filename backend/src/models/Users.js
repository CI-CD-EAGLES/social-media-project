const sequelize = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    user_name: Sequelize.STRING,
    password: Sequelize.STRING,
    profile_pic: Sequelize.STRING,
    bio: DataTypes.TEXT,
});

module.exports = User;