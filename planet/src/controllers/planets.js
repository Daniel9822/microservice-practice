const Planet = require("../../data");
const response = require("../utils/response");

const getAllPlanetCtrl = async (req, res) => {
    const data = await Planet.list();
    response(res, 200, data);
};


module.exports = {
    getAllPlanetCtrl
}
