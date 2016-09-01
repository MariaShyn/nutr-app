/* jshint node: true */
'use strict';

var Sequelize = require('sequelize'),
    connection = require('../../database'),
    Dish = require('../dish/dish.model.js').model,
    User = require('../user/user.model.js').model,
    Sold;

Sold = connection.define('sold',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: Sequelize.DATE
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    },
    {
        underscored: true,
        freezeTableName: true
    }
);

User.belongsToMany(Dish, {through: Sold})
Dish.belongsToMany(User, {through: Sold})

module.exports = {
    model: Sold
};