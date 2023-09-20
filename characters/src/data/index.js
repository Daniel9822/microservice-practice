const { DB_SERVICE } = require("../config/envs")

const PATH = `${DB_SERVICE}/characters`

module.exports = {
  list: async () => {
    const res = await fetch(PATH)
    const { data } = await res.json()
    return data
  },

  create: async (character) => {
    const res = await fetch(PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(character)
    })
    const { data } = await res.json()
    console.log(data)

    return data
  }
}
