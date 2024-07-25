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

//User has many gardenplots
User.hasMany(Gardenplot, {
    foreignKey: 'user_id',
});

//gardenplots belong to users
Gardenplot.belongsTo(User, {
    foreignKey: 'user_id',
});

//plots belong to many plants
Gardenplot.belongsToMany(Plant, {
    through: 'plotPlant',
});

//plants belong to many plots
Plant.belongsToMany(Gardenplot, {
    through: 'plotPlant',
});

module.exports = { Gardenplot, Plant, User, plotPlant };