const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {};

Plant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        variety: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //how many fruits can be picked from this plant
        pickable: { 
            type: DataTypes.INTEGER
        },
    }, 
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'plant'
    }
);

module.exports = Plant;