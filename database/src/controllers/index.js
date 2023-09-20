const errorCatcher = require("../helpers/errors/errorCatcher")
const { insertCharacterCtrl, listCharacterCtrl } = require("./characterCtrl")
const { insertFilmCtrl, listFilmCtrl } = require("./filmCtrl")
module.exports = {
  insertCharacter: errorCatcher(insertCharacterCtrl),
  listCharacter: errorCatcher(listCharacterCtrl),
  insertFilm: errorCatcher(insertFilmCtrl),
  listFilm: errorCatcher(listFilmCtrl)
}
