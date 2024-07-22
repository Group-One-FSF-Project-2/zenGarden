const Gardenplot = require('./Gardenplot');
const Plant = require('./Plant');
const User = require('./User');


User.belongsToMany(Gardenplot, {
    through: { 
        model: Gardenplot,
        unique: false
    }
});

Plant.belongsTo(Gardenplot, {
    through: { 
        model: Gardenplot,
        unique: false
    }
}
)

module.exports = { Gardenplot, Plant, User };