const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class gardenplants extends Model {};

gardenplants.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    plot_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        foreign_key: true,
        allowNull: false
    },
    created_at: {
        type: DataTypes.TIMESTAMP,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.TIMESTAMP,
        allowNull:false
    }
    }, {
    sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'gardenplants'
    });

    module.exports = gardenplants;