const handleError = require("../utils/handleError");
const {
  getCharacter,
  createCharacter,
  deleteCharacter,
  updateCharacter
} = require("./characters");

module.exports = {
  getCharacters: handleError(getCharacter),
  createCharacter: handleError(createCharacter),
  deleteCharacter: handleError(deleteCharacter),
  updateCharacter: handleError(updateCharacter)
};
