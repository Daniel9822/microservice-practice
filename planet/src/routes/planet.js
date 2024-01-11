const router = require("express").Router();
const controllers = require("../controllers");
const {
  planetCreateValidator,
  planetParamValidate
} = require("../validator/planetValidator");

router.get("/planet", controllers.getAllPlanet);
router.post("/planet", planetCreateValidator, controllers.createPlanet);
router.delete("/planet/:id", planetParamValidate, controllers.removePlanet);
router.put("/planet/:id", planetParamValidate, controllers.updatePlanet);

module.exports = router;
