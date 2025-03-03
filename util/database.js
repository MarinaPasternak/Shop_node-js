const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop-database', 'root', 'admin', { dialect: 'mysql' });

module.exports = sequelize;
