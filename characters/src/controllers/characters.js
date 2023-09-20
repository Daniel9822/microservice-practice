const response = require("../utils/response")
const Character = require("../data")

const getCharacter = async (req, res) => {
  const data = await Character.list()
  response(res, 200, data)
}

const createCharacter = async (req, res) => {
  const body = req.body
  //TODO validar body;
  console.log(body)

  const data = await Character.create(body)
  response(res, 201, data)
}

module.exports = {
  getCharacter,
  createCharacter
}
