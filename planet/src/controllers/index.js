const errorCatcher = require("../utils/errorCatcher");
const {
  getAllPlanetCtrl,
  createPlanetCtrl,
  removePlanetCtrl
} = require("./planets");

module.exports = {
  getAllPlanet: errorCatcher(getAllPlanetCtrl),
  createPlanet: errorCatcher(createPlanetCtrl),
  removePlanet: errorCatcher(removePlanetCtrl)
};
