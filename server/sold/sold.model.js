/* jshint node: true */
'use strict';

var Sequelize = require('sequelize'),
    connection = require('../database'),
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
        }
    },
    {
        freezeTableName: true
    }
);

Sold.hasMany(Dish);
Sold.hasMany(User);

function syncModel() {
    return Sold.sync({force: true});
}

module.exports = {
    model: Sold,
    syncModel: syncModel
};