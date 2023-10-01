const router = require("express").Router();
const controllers = require("../controller");
const {
  filmCreateValidator,
  filmsValidationParam
} = require("../validator/filmCreate.validator");

router.get("/films", controllers.getFilms);
router.post("/films", filmCreateValidator, controllers.createFilm);
router.delete("/films/:id", filmsValidationParam, controllers.removeFilm);

module.exports = router;
