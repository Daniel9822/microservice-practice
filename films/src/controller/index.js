const errorCatcher = require("../utils/errorCatcher")
const { getFilmsCtrl, createFilmsCtrl } = require("./films")

module.exports = {
  getFilms: errorCatcher(getFilmsCtrl),
  createFilm: errorCatcher(createFilmsCtrl)
}
