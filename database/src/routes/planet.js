const { listPlanet, insertPlanet } = require("../controllers")

const router = require("express").Router()

router.get("/", listPlanet)
router.post("/", insertPlanet)

module.exports = router
