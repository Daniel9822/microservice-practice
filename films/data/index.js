const { HandleError } = require("../src/utils/errors/handleError");
const films = require("./films.json");

module.exports = {
    list: async () => {
        // throw new HandleError('algo salio mal', 500)
        return films;
    },
};
