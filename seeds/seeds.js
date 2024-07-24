const sequelize = require('../config/connection');

const User = require('../models/User');
const userData = require('../seeds/user-seeds.json');

<<<<<<< HEAD
const seedData = async () => {
  await sequelize.sync({
    force: true,
  });

  await User.bulkCreate(userData, { individualHooks: true, returning: true });

  process.exit(0);
};

seedData();
=======
const Plant = require('../models/Plant');
const plantData = require('../seeds/plant-seeds.json');

const plotPlant = require('../models/plotPlant');
const plotPlantData = require('../seeds/plotPlant-seeds.json');

const Gardenplot = require('../models/Gardenplot');
const gardenPlotData = require('../seeds/gardenplot-seeds.json');


const allSeedData = async () => {
    await sequelize.sync({
        force: true,
    });

    await User.bulkCreate(userData, 
        {individualHooks:true, 
        returning: true,
    });
    await Plant.bulkCreate(plantData, 
        {individualHooks:true, 
        returning: true,
    });
    await Gardenplot.bulkCreate(gardenPlotData, 
        {individualHooks:true, 
        returning: true,
    });
    await plotPlant.bulkCreate(plotPlantData, 
        {individualHooks:true, 
        returning: true,
    });
   
    process.exit(0);
};

allSeedData();

>>>>>>> 10961878e789c766c82c4f989c7c7035577bb599
