const handleError = require("../utils/handleError");
const { getCharacter } = require("./characters");

module.exports = {
    getCharacters: handleError(getCharacter),
};
