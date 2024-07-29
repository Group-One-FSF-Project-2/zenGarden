const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class plotPlant extends Model {};

plotPlant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        plotId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'gardenplot',
                key: 'id',
            },
        },
        plantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        location_x: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'plotPlant'
    }
);

module.exports = plotPlant;