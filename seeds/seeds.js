const sequelize = require('../config/connection');

const User = require('../models/User');
const userData = require('../seeds/user-seeds.json');

const Plant = require('../models/Plant');
const plantData = require('../seeds/plant-seeds.json');

const plotPlant = require('../models/plotPlant');
const plotPlantData = require('../seeds/plotPlant-seeds.json');

const Gardenplot = require('../models/Gardenplot');
const gardenPlotData = require('../seeds/gardenplot-seeds.json');


const userSeedData = async () => {
    await sequelize.sync({
        force: true,
    });

    await User.bulkCreate(userData, 
        {individualHooks:true, 
        returning: true,
    });

    process.exit(0);
};

const plantSeedData = async () => {
    await sequelize.sync({
        force: true,
    });

    await Plant.bulkCreate(plantData, 
        {individualHooks:true, 
        returning: true,
    });

    process.exit(0);
};

const plotPlantSeedData = async () => {
    await sequelize.sync({
        force: true,
    });

    await plotPlant.bulkCreate(plotPlantData, 
        {individualHooks:true, 
        returning: true,
    });

    process.exit(0);
};

const gardenPlotSeedData = async () => {
    await sequelize.sync({
        force: true,
    });

    await Gardenplot.bulkCreate(gardenPlotData, 
        {individualHooks:true, 
        returning: true,
    });

    process.exit(0);
};

userSeedData();
plantSeedData();
plotPlantSeedData();
gardenPlotSeedData();

