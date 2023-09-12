const errorCatcher = require("../utils/errorCatcher");
const { getFilms } = require('./films')

module.exports = {
    getFilms: errorCatcher(getFilms)
}