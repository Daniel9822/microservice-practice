const { DATABASE_SERVICE } = require("../src/config/envs");

const PATH = DATABASE_SERVICE;

module.exports = {
  list: async () => {
    const res = await fetch(PATH);
    const { data } = await res.json();
    return data;
  },

  insert: async (planet) => {
    const res = await fetch(PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(planet)
    });

    const { data } = await res.json();
    return data;
  },

  removePlanet: async (id) => {
    const res = await fetch(`${PATH}/${id}`, {
      method: "DELETE"
    });

    const { data } = await res.json();
    return data;
  }
};
