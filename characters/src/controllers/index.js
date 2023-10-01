const handleError = require("../utils/handleError");
const {
  getCharacter,
  createCharacter,
  deleteCharacter
} = require("./characters");

module.exports = {
  getCharacters: handleError(getCharacter),
  createCharacter: handleError(createCharacter),
  deleteCharacter: handleError(deleteCharacter)
};
