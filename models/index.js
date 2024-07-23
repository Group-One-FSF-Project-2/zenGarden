const Gardenplot = require('./Gardenplot');
const Plant = require('./Plant');
const User = require('./User');
const plotPlant = require('./plotPlant');


// User.belongsToMany(Gardenplot, {
//     through: { 
//         model: Gardenplot,
//         unique: false
//     }
// });

// Plant.belongsTo(Gardenplot, {
//     through: { 
//         model: Gardenplot,
//         unique: false
//     }
// }
// )

User.hasMany(Gardenplot, {
    foreignKey: 'user_id',
});

Gardenplot.belongsTo(User, {
    foreignKey: 'user_id',
});

Gardenplot.hasMany(plotPlant, {
    foreignKey: 'plotId',
});

Gardenplot.hasMany(plotPlant, {
    foreignKey: 'plantId',
});

module.exports = { Gardenplot, Plant, User, plotPlant };