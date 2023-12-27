const { body } = require("express-validator");
const { DB_SERVICE } = require("../config/envs");

const PATH = `${DB_SERVICE}/characters`;
console.log(PATH);

module.exports = {
  list: async () => {
    const res = await fetch(PATH);
    const { data } = await res.json();
    return data;
  },

  create: async (character) => {
    const res = await fetch(PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(character)
    });
    const { data } = await res.json();
    console.log(data);

    return data;
  },

  deleteChar: async (id) => {
    const res = await fetch(`${PATH}/${id}`, {
      method: "DELETE"
    });

    const { data } = await res.json();
    return data;
  },

  updateChar: async ({ id, body }) => {
    console.log(body);

    const res = await fetch(`${PATH}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const { data } = await res.json();
    return data;
  }
};
