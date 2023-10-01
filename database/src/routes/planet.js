const { planets } = require("../controllers");

const router = require("express").Router();

router.get("/", planets.listPlanet);
router.post("/", planets.insertPlanet);
router.delete("/:id", planets.removePlanet);

module.exports = router;
