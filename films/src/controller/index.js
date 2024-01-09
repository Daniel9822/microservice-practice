const errorCatcher = require("../utils/errorCatcher");
const {
  getFilmsCtrl,
  createFilmsCtrl,
  removeFilm,
  updateFilmCtrl
} = require("./films");

module.exports = {
  getFilms: errorCatcher(getFilmsCtrl),
  createFilm: errorCatcher(createFilmsCtrl),
  removeFilm: errorCatcher(removeFilm),
  updateFilm: errorCatcher(updateFilmCtrl)
};
