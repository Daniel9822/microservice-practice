const router = require("express").Router();
const controllers = require('../controllers')

router.get("/planet", controllers.getAllPlanet);

module.exports = router;
