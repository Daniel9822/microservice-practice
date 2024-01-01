const errorCatcher = require("../helpers/errors/errorCatcher");
const {
  insertCharacterCtrl,
  listCharacterCtrl,
  removeCharacterCtrl,
  updateCharacterCtrl
} = require("./characterCtrl");
const {
  insertFilmCtrl,
  listFilmCtrl,
  removeFilmsCtrl,
  updateFilmCtrl
} = require("./filmCtrl");
const {
  insertPlanetCtrl,
  listPlanetCtrl,
  removePlanetCtrl,
  updatePlanetCtrl
} = require("./planetCtrl");

module.exports = {
  characters: {
    insertCharacter: errorCatcher(insertCharacterCtrl),
    listCharacter: errorCatcher(listCharacterCtrl),
    removeCharacter: errorCatcher(removeCharacterCtrl),
    updateCharacter: errorCatcher(updateCharacterCtrl)
  },
  planets: {
    insertPlanet: errorCatcher(insertPlanetCtrl),
    listPlanet: errorCatcher(listPlanetCtrl),
    removePlanet: errorCatcher(removePlanetCtrl),
    updatePlanet: errorCatcher(updatePlanetCtrl)
  },
  films: {
    insertFilm: errorCatcher(insertFilmCtrl),
    listFilm: errorCatcher(listFilmCtrl),
    removeFilm: errorCatcher(removeFilmsCtrl),
    updateFilm: errorCatcher(updateFilmCtrl)
  }
};
