const router = require("express").Router()
const { getCharacters } = require("../controllers")
const { createCharacter } = require("../controllers")

router.get("/characters", getCharacters)
router.post("/characters", createCharacter)

module.exports = router
