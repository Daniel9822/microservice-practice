const modelsName = require("../helpers/modelsName");
const response = require("../helpers/response");
const {
  listService,
  insertServices,
  removeService,
  updateService
} = require("../services");

const listFilmCtrl = async (req, res) => {
  const model = modelsName.filmModel;
  const data = await listService({ model });
  response(res, 200, data);
};

const insertFilmCtrl = async (req, res) => {
  const body = req.body;
  const model = modelsName.filmModel;
  const data = await insertServices({ model, data: body });
  response(res, 201, data);
};

const removeFilmsCtrl = async (req, res) => {
  const { id } = req.params;

  const model = modelsName.filmModel;
  const data = await removeService({ model, id });
  response(res, 200, data);
};

const updateFilmCtrl = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const model = modelsName.filmModel;
  const data = await updateService({ model, data: body, id });
  response(res, 200, data);
};

module.exports = {
  listFilmCtrl,
  insertFilmCtrl,
  removeFilmsCtrl,
  updateFilmCtrl
};
