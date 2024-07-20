const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class plants extends Model {};

plants.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    garden_plot: {
        type: DataTypes.INTEGER,
        foreign_key: true,
        allowNull: false
    },
    seed_id: {
        type: DataTypes.INTEGER,
        foreign_key: true,
        allowNull: false
    },
    location_x: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location_y: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   type: {
        type: DataTypes.STRING,
        allowNull: false
   },
   created_at: {
        type: DataTypes.TIME,
        allowNull: false
   },
   updated_at: {
        type: DataTypes.TIME,
        allowNull: false
   }
   }, {
    sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'plants'
});

module.exports = plants;