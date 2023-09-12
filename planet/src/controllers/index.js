const errorCatcher = require("../utils/errorCatcher");
const { getAllPlanetCtrl } = require("./planets");

module.exports = {
    getAllPlanet: errorCatcher(getAllPlanetCtrl),
};
