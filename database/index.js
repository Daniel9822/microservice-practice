const server = require("./src/server")
const conn = require("./src/config/conn")

const PORT = process.env.PORT || 8004
server.listen(PORT, async () => {
  conn()
  console.log(`Server listener on port ${PORT}`)
})
