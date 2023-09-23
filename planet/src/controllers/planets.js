const Planet = require("../../data")
const response = require("../utils/response")

const getAllPlanetCtrl = async (req, res) => {
  console.log(req.url)

  const data = await Planet.list()
  response(res, 200, data)
}

const createPlanetCtrl = async (req, res) => {
  const body = req.body
  const data = await Planet.insert(body)

  response(res, 201, data)
}

module.exports = {
  getAllPlanetCtrl,
  createPlanetCtrl
}
