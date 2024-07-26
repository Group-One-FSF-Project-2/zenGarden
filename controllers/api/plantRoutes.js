const router = require('express').Router();
const { Plant, plotPlant } = require('../../models');

router.get('/',  async (req, res) => {
    try {
      const newPlant = await Plant.findAll();
  
      res.status(200).json(newPlant);
    } catch (err) {
      res.status(400).json(err);
    }
  })

router.post('/',  async (req, res) => {
    try {
      const newPlant = await Plant.create(req.body);
  
      res.status(200).json(newPlant);
    } catch (err) {
      res.status(400).json(err);
    }
  });

 
  module.exports =  router
