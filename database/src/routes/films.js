const { listFilm, insertFilm } = require("../controllers")

const router = require("express").Router()

router.get("/", listFilm)
router.post("/", insertFilm)

module.exports = router
