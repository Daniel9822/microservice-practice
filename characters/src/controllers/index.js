const handleError = require("../utils/handleError")
const { getCharacter, createCharacter } = require("./characters")

module.exports = {
  getCharacters: handleError(getCharacter),
  createCharacter: handleError(createCharacter)
}
