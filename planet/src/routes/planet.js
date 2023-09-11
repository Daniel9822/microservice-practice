const router = require("express").Router();
const Planet = require('../../data')

router.get("/planet", async (req, res) => {
    const planet = await Planet.list()
    res.status(200).send(planet);
});

module.exports = router;
