const { films } = require("../controllers");

const router = require("express").Router();

router.get("/", films.listFilm);
router.post("/", films.insertFilm);
router.delete("/:id", films.removeFilm);

module.exports = router;
