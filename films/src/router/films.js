const router = require("express").Router()
const controllers = require("../controller")

router.get("/films", controllers.getFilms)
router.post("/films", controllers.createFilm)

module.exports = router
