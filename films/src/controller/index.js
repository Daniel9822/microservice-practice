const errorCatcher = require("../utils/errorCatcher");
const { getFilmsCtrl, createFilmsCtrl, removeFilm } = require("./films");

module.exports = {
  getFilms: errorCatcher(getFilmsCtrl),
  createFilm: errorCatcher(createFilmsCtrl),
  removeFilm: errorCatcher(removeFilm)
};
