const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenplotRoutes = require('./gardenplotRoutes');
<<<<<<< HEAD
=======
const plantRoutes = require('./plantRoutes');

>>>>>>> 5b82dd275dc1c0fd5d6be71ce54bb7d63aed77dc

router.use('/users', userRoutes);
router.use('/gardenplots', gardenplotRoutes);

module.exports = router;
