const sequelize = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Posts = sequelize.define('user', {
    user_name: DataTypes.TEXT,
    written_content: DataTypes.TEXT,
    time_created: DataTypes.DATE,
    num_of_likes: DataTypes.INTEGER,
    replies: DataTypes.ARRAY,
});

module.exports = Posts;