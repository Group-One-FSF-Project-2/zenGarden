const router = require('express').Router();

// TESTING WITH PARAMETERS - Scott 28Jul
router.get('/', (req, res) => {
  // what shoult be displayed on the homepage?????
  res.render('home', {
    logged_in: req.session.logged_in,
  });
});

router.get('/plots', (req, res) => {
  res.render('allPlots');
});

router.get('/plots/new', (req, res) => {
  res.render('newPlot');
});


router.get('/plots/:id', (req, res) => {
  // we need to get the plot information from the database.
  res.render('singlePlot', {
    plotId: 3,
    plot_name: 'My new garden',
  });
});

// FOR TESTING  localhost:3001/garden
router.get('/garden', (req, res) => {
  res.json('Hello World');
});

module.exports = router;
