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


// router.get('/plots/:id', (req, res) => {
//   // we need to get the plot information from the database.
//   res.render('singlePlot', {
//     plotId: 3,
//     plot_name: 'My new garden',
//   });
// });

// FOR TESTING  localhost:3001/garden
// router.get('/garden', (req, res) => {
//   res.json('Hello World');
// });

// router.get('/', async (req, res) => {
//   try {
//     const plotData = await Gardenplot.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['user_name'],
//         },
//       ],
//     });

//     const plots = plotData.map((plot) => plot.get({ plain: true }));

//     res.render('allPlots', {
//       plots,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/plots/:id', withAuth, async (req, res) => {
//   try {
//     const plotData = await Gardenplot.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['user_name'],
//         },
//       ],
//     });

//     const plot = plotData.get({ plain: true });

//     res.render('allPlots', {
//       ...plot,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/plots', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: {exclude: ['password'] },
//       include: [{ model: Gardenplot}],
//     });

//     const user = userData.get({ plain: true });

//     res.render('allPlots', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/plots');
//     return;
//   }

//   res.render('home');
// });

module.exports = router;
