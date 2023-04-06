const sequelize = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Posts = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: DataTypes.TEXT,
    written_content: DataTypes.TEXT,
    time_created: DataTypes.DATE,
    num_of_likes: DataTypes.INTEGER,
});

const Users = sequelize.define('user', {
    user_name: Sequelize.STRING,
    password: Sequelize.STRING,
    profile_pic: Sequelize.STRING,
    bio: DataTypes.TEXT,
});

module.exports = {Posts, Users};