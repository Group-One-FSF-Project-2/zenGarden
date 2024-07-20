const router = require('express').Router();
const api = require('./api');
const users = require('../models/users');
const gardenplants = require('../models/gardenplants');
const seeds = require('../models/seeds');
const plants = require('../models/plants');

//localhost:3001/api
router.use('/api', api);

router.get('/', async (req, res) => {
  const users = await users.findAll();
  const sanitizedData = allUsers.map((users) => {
    return users.get({ plain: true });
  });

  res.render('plants', { sanitizedData });
});

module.exports = router;
