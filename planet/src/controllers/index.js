const errorCatcher = require("../utils/errorCatcher")
const { getAllPlanetCtrl, createPlanetCtrl } = require("./planets")

module.exports = {
  getAllPlanet: errorCatcher(getAllPlanetCtrl),
  createPlanet: errorCatcher(createPlanetCtrl)
}
