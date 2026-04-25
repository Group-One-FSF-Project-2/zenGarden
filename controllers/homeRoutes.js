/**
 * Home page routes
 * Handles rendering of main pages and user authentication
 */

const router = require('express').Router();
const { Gardenplot, User } = require('../models');
const withAuth = require('../utils/auth');

// Home page route
router.get('/', async (req, res) => {
  try {
    const plotData = await Gardenplot.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });

    const plots = plotData.map((plot) => plot.get({ plain: true }));

    res.render('home', {
      plots,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plots/:id', withAuth, async (req, res) => {
  try {
    const plotData = await Gardenplot.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });

    const plot = plotData.get({ plain: true });

    res.render('singlePlot', {
      ...plot,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plots', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password'] },
      include: [{ model: Gardenplot}],
    });

    const user = userData.get({ plain: true });

    res.render('singlePlot', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/plots');
    return;
  }

  res.render('home');
});

module.exports = router;
