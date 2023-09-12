const { HandleError } = require("../src/utils/errors/handleAsyncErrors");
const planet = require("./planets.json");

module.exports = {
    list: async () => {
        throw new HandleError('algo salio mal', 500)
        return planet;
    },
};
