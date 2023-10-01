const dbModels = require("../schema");

const insertServices = async ({ model, data }) => {
  return await dbModels[model].insert(data);
};

const listService = async ({ model }) => {
  return await dbModels[model].list();
};

const removeService = async ({ model, id }) => {
  return await dbModels[model].removeItem(id);
};

module.exports = { insertServices, listService, removeService };
