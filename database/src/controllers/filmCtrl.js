const modelsName = require("../helpers/modelsName")
const response = require("../helpers/response")
const { listService, insertServices } = require("../services")

const listFilmCtrl = async (req, res) => {
  const model = modelsName.filmModel
  const data = await listService({ model })
  response(res, 200, data)
}

const insertFilmCtrl = async (req, res) => {
  const body = req.body
  const model = modelsName.filmModel
  const data = await insertServices({ model, data: body })
  response(res, 201, data)
}

module.exports = {
  listFilmCtrl,
  insertFilmCtrl
}