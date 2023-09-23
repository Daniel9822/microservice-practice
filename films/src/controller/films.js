const Films = require("../../data")
const response = require("../utils/response")

const getFilmsCtrl = async (req, res) => {
  const films = await Films.list()
  response(res, 200, films)
}

const createFilmsCtrl = async (req, res) => {
  const body = req.body
  const data = await Films.insert(body)
  response(res, 201, data)
}

module.exports = {
  getFilmsCtrl,
  createFilmsCtrl
}
