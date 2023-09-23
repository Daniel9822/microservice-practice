const modelsName = require("../helpers/modelsName")
const response = require("../helpers/response")
const { listService, insertServices } = require("../services")

const listPlanetCtrl = async (req, res) => {
  const model = modelsName.planetModel
  const data = await listService({ model })
  response(res, 200, data)
}

const insertPlanetCtrl = async (req, res) => {
  const body = req.body
  //TODO validar datos del body
  const model = modelsName.planetModel
  const data = await insertServices({ model, data: body })
  response(res, 201, data)
}

module.exports = {
  listPlanetCtrl,
  insertPlanetCtrl
}
