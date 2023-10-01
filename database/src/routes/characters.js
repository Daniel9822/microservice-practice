const { characters } = require("../controllers");

const router = require("express").Router();

router.get("/", characters.listCharacter);
router.post("/", characters.insertCharacter);
router.delete("/:id", characters.removeCharacter);

module.exports = router;
