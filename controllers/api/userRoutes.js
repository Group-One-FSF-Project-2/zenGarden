const router = require('express').Router();
const { User, Gardenplot } = require('../../models');


router.get('/', async(req, res) => {
    const allUsers = await users.findAll();
})

router.post('/', async (req, res) => {
    const newUsers = user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at
    });
    res.json(newUsers);
})

module.exports = router;