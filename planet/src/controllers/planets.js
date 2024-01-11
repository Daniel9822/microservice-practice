const Planet = require("../../data");
const response = require("../utils/response");
const { matchedData } = require("express-validator");

const getAllPlanetCtrl = async (req, res) => {
  const data = await Planet.list();
  response(res, 200, data);
};

const createPlanetCtrl = async (req, res) => {
  const body = matchedData(req);
  const data = await Planet.insert(body);
  response(res, 201, data);
};

const removePlanetCtrl = async (req, res) => {
  const { id } = req.params;
  const data = await Planet.removePlanet(id);
  response(res, 200, data);
};

const updatePlanetCtrl = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const data = await Planet.updatePlanet({ id, body });
  response(res, 200, data);
};

module.exports = {
  getAllPlanetCtrl,
  createPlanetCtrl,
  removePlanetCtrl,
  updatePlanetCtrl
};
