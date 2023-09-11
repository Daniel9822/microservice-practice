const planet = require("./planets.json");

module.exports = {
    list: async () => {
        return planet;
    },
};
