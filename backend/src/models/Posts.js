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

module.exports = Posts;