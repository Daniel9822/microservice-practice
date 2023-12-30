const response = require("../helpers/response");
const modelsNames = require("../helpers/modelsName");
const {
  listService,
  insertServices,
  removeService,
  updateService
} = require("../services");

const listCharacterCtrl = async (req, res) => {
  const model = modelsNames.characterModel;
  const data = await listService({ model });
  console.log(data);

  response(res, 200, data);
};

const insertCharacterCtrl = async (req, res) => {
  const body = req.body;
  const model = modelsNames.characterModel;
  const data = await insertServices({ model, data: body });
  response(res, 201, data);
};

const removeCharacterCtrl = async (req, res) => {
  const { id } = req.params;
  const model = modelsNames.characterModel;
  const data = await removeService({ model, id });
  response(res, 200, data);
};

const updateCharacterCtrl = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  console.log(body);

  const model = modelsNames.characterModel;
  const data = await updateService({ model, data: body, id });
  response(res, 200, data);
};

module.exports = {
  listCharacterCtrl,
  insertCharacterCtrl,
  removeCharacterCtrl,
  updateCharacterCtrl
};
