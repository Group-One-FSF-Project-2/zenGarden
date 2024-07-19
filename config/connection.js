const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.garden_db, process.env.garden_user, process.env.pw,
    {
        host: 'localhost',
        dialect: postgres
    }
)

module.exports = sequelize;