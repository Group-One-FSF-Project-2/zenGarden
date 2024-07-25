const router = require('express').Router();
const { Plant, plotPlant } = require('../../models');

router.post('/',  async (req, res) => {
    try {
      const newPlant = await Plant.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPlant);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // router.put('/:plantId', async (req, res) => {
  //   try {
  //       const 
  //   }
  // })