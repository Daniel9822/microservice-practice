const response = require("../helpers/response")
const modelsNames = require("../helpers/modelsName")
const { listService, insertServices } = require("../services")

const listCharacter = async (req, res) => {
  const model = modelsNames.characterModel
  const data = listService({ model })
  response(res, 200, data)
}

const insertCharacter = async (req, res) => {
  const body = req.body
  console.log(body)

  const model = modelsNames.characterModel
  const data = await insertServices({ model, data: body })
  response(res, 200, data)
}

module.exports = {
  listCharacter,
  insertCharacter
}
