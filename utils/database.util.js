const {Sequelize,DataTypes} = require('sequelize');

//Connecting to data base

const db = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'250397',
    port:5432,
    database:'recordsDB'
});

module.exports = {db , DataTypes}