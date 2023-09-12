const Films = require("../../data")
const response = require("../utils/response")

const getFilms = async (req, res) => {
    const films = await Films.list()
    response(res, 200, films)
}

module.exports = {
    getFilms
}