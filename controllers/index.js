const router = require('express').Router();
const apiRoutes = require('./api');

// localhost:3001/api
router.use('/api', apiRoutes);

// FOR TESTING  localhost:3001/garden
router.get('/garden', (req, res) => {
  res.json('Hello World');
});

module.exports = router;
