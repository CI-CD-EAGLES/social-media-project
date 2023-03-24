const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const User = sequelize.define('user', {
    user_name: Sequelize.STRING,
    password: Sequelize.STRING,
    profile_pic: Sequelize.STRING,
    bio: Sequelize.STRING,
});

module.exports = User;