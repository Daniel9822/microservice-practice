const router = require("express").Router()
const controllers = require("../controllers")

router.get("/planet", controllers.getAllPlanet)
router.post("/planet", controllers.createPlanet)

module.exports = router
