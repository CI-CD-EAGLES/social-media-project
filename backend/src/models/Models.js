const sequelize = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Posts = sequelize.define('post', {
  written_content: DataTypes.TEXT,
  num_of_likes: DataTypes.INTEGER,
});

const Users = sequelize.define('user', {
  user_name: Sequelize.STRING,
  password: Sequelize.STRING,
  profile_pic: Sequelize.STRING,
  bio: DataTypes.TEXT,
});

Users.hasMany(Posts);
Posts.belongsTo(Users);

module.exports = { Posts, Users };
