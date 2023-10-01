const errorCatcher = require("../helpers/errors/errorCatcher");
const {
  insertCharacterCtrl,
  listCharacterCtrl,
  removeCharacterCtrl
} = require("./characterCtrl");
const { insertFilmCtrl, listFilmCtrl, removeFilmsCtrl } = require("./filmCtrl");
const {
  insertPlanetCtrl,
  listPlanetCtrl,
  removePlanetCtrl
} = require("./planetCtrl");

module.exports = {
  characters: {
    insertCharacter: errorCatcher(insertCharacterCtrl),
    listCharacter: errorCatcher(listCharacterCtrl),
    removeCharacter: errorCatcher(removeCharacterCtrl)
  },
  planets: {
    insertPlanet: errorCatcher(insertPlanetCtrl),
    listPlanet: errorCatcher(listPlanetCtrl),
    removePlanet: errorCatcher(removePlanetCtrl)
  },
  films: {
    insertFilm: errorCatcher(insertFilmCtrl),
    listFilm: errorCatcher(listFilmCtrl),
    removeFilm: errorCatcher(removeFilmsCtrl)
  }
};
