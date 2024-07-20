const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class users extends Model {};

users.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.TIMESTAMP,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.TIMESTAMP,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'users'
});

module.exports = users;