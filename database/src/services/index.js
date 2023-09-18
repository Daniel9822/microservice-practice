const dbModels = require("../schema")

const insertServices = async ({ model, data }) => {
  return await dbModels[model].insert(data)
}

const listService = async ({ model }) => {
  return await dbModels[model].list()
}

module.exports = { insertServices, listService }
