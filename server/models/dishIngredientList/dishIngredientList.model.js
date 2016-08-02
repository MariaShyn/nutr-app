/* jshint node: true */
'use strict';

var Sequelize = require('sequelize'),
    connection = require('../database'),
    Dish = require('../dish/dish.model.js').model,
    Ingredient = require('./ingredient.model.js').model,
    DishIngredientList;

DishIngredientList = connection.define('dishIngredientList',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: Sequelize.FLOAT
        }
    },
    {
        underscored: true,
        freezeTableName: true
    }
);

DishIngredientList.hasMany(Dish);
DishIngredientList.hasMany(Ingredient);

function syncModel() {
    return DishIngredientList.sync({force: true});
}

module.exports = {
    model: DishIngredientList,
    syncModel: syncModel
};