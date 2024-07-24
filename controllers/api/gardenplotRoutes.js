const router = require('express').Router();
const { Gardenplot, plotPlant } = require('../../models');
// set post to pass in the user info to get the correct garden plot
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

// updating or adding new plant to plot
 // add a plant to an existing garden plot by finding it by it's id
//  req.body needs to include: plantId. create a new plotPlant and add the plotId and the plantId to it. 
router.put('/:id', async (req, res) => {
    
   try {
    const newPlant = await plotPlant.update(req.body, {
      
    })

    res.status(200).json(newPlant);
   } catch (err) {
    res.status(400).json(err);
   }
})

router.delete('/:id', async (req, res) => {
    try {
      const plotData = await Gardenplot.destroy({
        where: {
          id: req.params.id,
        //   user_id: req.session.user_id,
        },
      });
  
      if (!plotData) {
        res.status(404).json({ message: 'No plot found!' });
        return;
      }
  
      res.status(200).json(plotData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;