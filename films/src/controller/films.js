const Films = require("../../data");
const response = require("../utils/response");
const { matchedData } = require("express-validator");

const getFilmsCtrl = async (req, res) => {
  const films = await Films.list();
  response(res, 200, films);
};

const createFilmsCtrl = async (req, res) => {
  const body = matchedData(req);
  const data = await Films.insert(body);
  response(res, 201, data);
};

const removeFilm = async (req, res) => {
  const { id } = req.params;
  const data = await Films.removeFilm(id);
  response(res, 200, data);
};

module.exports = {
  getFilmsCtrl,
  createFilmsCtrl,
  removeFilm
};
