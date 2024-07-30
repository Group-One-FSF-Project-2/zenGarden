const router = require('express').Router();
const { User, Gardenplot, plotPlant } = require('../../models');

//POST create new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//POST Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { user_name: req.body.user_name }});

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPw = await userData.checkPassword(req.body.password);

    if (!validPw) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save( async () => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log('User ID:', userData.id);
      
      try {
        const gardenPlot = await Gardenplot.findOne({ where: { user_id: userData.id } });
        if (gardenPlot) {
          res.json({ user: userData.id, plotData: gardenPlot.id });
        } else {
          // 
          const createPlot = await Gardenplot.create({
            user_id: userData.id,
            plot_name: `${userData.user_name} Garden Plot`
          });

          res.json({ user: userData.id, plotData: createPlot.id });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }

      // res.json({ user: userData.id, message: 'You are now logged in!' });


    });

  } catch (err) {
    res.status(400).json(err);
  }
});


//POST logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


//GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET a single user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if(!userData) {
      res.status(404).json({message: 'No user found with this id!'});
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;