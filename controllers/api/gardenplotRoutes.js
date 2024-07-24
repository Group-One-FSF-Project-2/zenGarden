const router = require('express').Router();
const { Gardenplot, Plant, plotPlant } = require('../../models');

router.get('/', async (req, res) => {
    const dbGardenplotData = await Gardenplot.find({

    })
    res.send('GET /gardenplots route')
});

router.post('/gardenplot:id', (req, res) => {
    

    res.send('POST /gardenplots route');
});



module.exports = router;