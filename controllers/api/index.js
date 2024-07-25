const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenplotRoutes = require('./gardenplotRoutes');
<<<<<<< HEAD
const plantRoutes = require('./plantRoutes');
=======
const plantRoutes = require('./plant');
>>>>>>> 75e02e27303ac4d926576c8cef7c95ea1a75a9d2


router.use('/users', userRoutes);
router.use('/gardenplots', gardenplotRoutes);



module.exports = router;
