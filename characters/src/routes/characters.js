const router = require("express").Router();
const { getCharacters, deleteCharacter } = require("../controllers");
const { createCharacter } = require("../controllers");
const {
  characterValidator,
  characterValidatorParam
} = require("../validation/character.validator");

router.get("/characters", getCharacters);
router.post("/characters", characterValidator, createCharacter);
router.delete("/characters/:id", characterValidatorParam, deleteCharacter);

module.exports = router;
