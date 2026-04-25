/**
 * Garden Plot API Routes
 * Handles CRUD operations for garden plots and plant associations
 */

const router = require('express').Router();
const { Gardenplot, plotPlant, Plant } = require('../../models');

router.get('/', async (req, res) => {
  try {
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

// Get plants for a specific plot
router.get('/:id/plants', async (req, res) => {
  try {
    const plotId = parseInt(req.params.id, 10);
    
    // Query the junction table directly to get all individual plant instances
    const plotPlants = await plotPlant.findAll({
      where: { plot_id: plotId },
      attributes: ['id', 'plot_id', 'plant_id', 'location_x', 'created_at'],
      raw: true
    });
    
    if (plotPlants.length === 0) {
      return res.status(200).json([]);
    }
    
    // Get plant details for each instance
    const plantsData = [];
    for (const plotPlant of plotPlants) {
      const plant = await Plant.findByPk(plotPlant.plant_id);
      if (plant) {
        plantsData.push({
          plant_id: plant.id,
          location_x: plotPlant.location_x,
          created_at: plotPlant.created_at,
          plant_type: plant.plant_type,
          plant_variety: plant.plant_variety
        });
      }
    }
    
    res.status(200).json(plantsData);
  } catch (err) {
    console.error('Error fetching plot plants:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
});

router.post('/:id', async (req, res) => {

  try {
    const newPlant = await plotPlant.create({
      ...req.body
    }); 
    res.status(200).json({
      message: "plot plant created successfully",
      newPlant: newPlant
    });
  } catch (err) {  
    console.error('Error creating plot plant:', err);
    res.status(400).json({
      error: err.message || 'An error occurred while creating the plot plant'
    });
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

router.get('/singlePlot', async (req, res) => {
  let plotId = req.query.plotId;
  plotId = parseInt(plotId, 10);
  const plotData = [{
    "plotId": plotId
  }];
  //store the plotId to local storage 
  

  res.render('singlePlot', { plotData });
});


module.exports = router;
