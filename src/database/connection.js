const sequelize = require('sequelize');

const host = process.env.HOST;
const username = process.env.USERMAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const dialect = process.env.DIALETIC;

const connection = new sequelize(database, username, password, {host, dialect});

module.exports = connection;