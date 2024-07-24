const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gardenplot extends Model {}

Gardenplot.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    plot_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'gardenplot',
  }
);

module.exports = Gardenplot;
