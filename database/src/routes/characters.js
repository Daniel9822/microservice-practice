const {
  listCharacter,
  insertCharacter
} = require("../controllers/characterCtrl")

const router = require("express").Router()

router.get("/", listCharacter)

router.post("/", insertCharacter)

module.exports = router
