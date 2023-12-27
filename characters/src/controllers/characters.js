const response = require("../utils/response");
const Character = require("../data");
const { matchedData } = require("express-validator");

const getCharacter = async (req, res) => {
  const data = await Character.list();
  response(res, 200, data);
};

const createCharacter = async (req, res) => {
  const body = matchedData(req);
  console.log(body);

  const data = await Character.create(body);
  response(res, 201, data);
};

const deleteCharacter = async (req, res) => {
  const { id } = req.params;

  const removeCharacter = await Character.deleteChar(id);
  response(res, 200, removeCharacter);
};

const updateCharacter = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const data = await Character.updateChar({ id, body });
  response(res, 200, data);
};

module.exports = {
  getCharacter,
  createCharacter,
  deleteCharacter,
  updateCharacter
};
