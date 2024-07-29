const router = require('express').Router();
const { Gardenplot, plotPlant, Plant } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // pull all available plots and plants 
    const gardenPlots = await Gardenplot.findAll( {
      include: [{
        model: Plant, 
        through: plotPlant
      }]
    });
    res.status(200).json(gardenPlots);
  } catch (err) {
    res.status(500).json(err);
  }
});

// set post to pass in the user info & create the garden plot for the correct user
router.post('/', async (req, res) => {
  try {
    const newPlot = await Gardenplot.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPlot);
  } catch (err) {
    res.status(400).json(err);
  }
});

// updating or adding a new plant to gardenplot

router.get('/test', async (req, res) => {
  try { 
    const plotPlants = await plotPlant.findAll();
    
    res.status(200).json(plotPlants);
  } catch (err) {
    console.error('Error fetching plot plants:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

router.post('/:id', async (req, res) => {
  console.log('req.body:', req.body);

  try {
      const newPlant = await plotPlant.create({
      ...req.body
    });
    res.status(200).json(newPlant);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const plotData = await Gardenplot.destroy({
      where: {
        id: req.params.id,
          user_id: req.session.user_id,
      },
    });

    if (!plotData) {
      res.status(404).json({ message: 'No plot found!' });
      return;
    }

    res.status(200).json({ message: 'successfully delete plot' }, plotData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
