const insertStatic = async function ({ model, data }) {
  const res = await model.create(data);
  return res;
};

const removeStatic = async function ({ model, id }) {
  return await model.findByIdAndRemove(id);
};

const updateStatic = async function ({ model, data, id }) {
  return await model.findByIdAndUpdate(id, data, {
    new: true
  });
};

module.exports = {
  insertStatic,
  removeStatic,
  updateStatic
};
