const response = require("../helpers/response")
const modelsNames = require("../helpers/modelsName")
const { listService, insertServices } = require("../services")
const ErrorHandler = require("../helpers/errors/errorHandler")

const listCharacterCtrl = async (req, res) => {
  const model = modelsNames.characterModel
  const data = await listService({ model })
  response(res, 200, data)
}

const insertCharacterCtrl = async (req, res) => {
  const body = req.body
  const model = modelsNames.characterModel
  console.log(body)

  const data = await insertServices({ model, data: body })
  response(res, 200, data)
}

module.exports = {
  listCharacterCtrl,
  insertCharacterCtrl
}
