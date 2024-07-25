const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenplotRoutes = require('./gardenplotRoutes');
// const plantRoutes = require('./plantRoutes');


router.use('/users', userRoutes);
router.use('/gardenplots', gardenplotRoutes);

module.exports = router;
