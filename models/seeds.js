const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class seeds extends Model {};

seeds.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    plant_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seed_data: {
        type: DataTypes.JSONB,
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
    modelName: 'seeds'
});

module.exports = seeds;