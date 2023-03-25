const { Sequelize } = require('sequelize');
const path = require('path');
const debug = require('debug')('app:sequelize'); //debug package

const sequelize = new Sequelize('database_SMA', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
