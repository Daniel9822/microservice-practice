const { DATABASE_SERVICE } = require("../src/config/envs")
const { HandleError } = require("../src/utils/errors/handleError")
const films = require("./films.json")

const PATH = DATABASE_SERVICE

module.exports = {
  list: async () => {
    const res = await fetch(PATH)
    const { data } = await res.json()
    return data
  },

  insert: async (film) => {
    const res = await fetch(PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(film)
    })
    const { data } = await res.json()
    return data
  }
}
