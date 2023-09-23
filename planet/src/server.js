const express = require("express")
const server = express()
const response = require("./utils/response")
const morgan = require("morgan")

server.use(express.json())
server.use(require("./routes/planet"))
server.use(morgan("dev"))

server.use("/", (req, res) => {
  response(res, 404, "not found")
})

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message
  })
})

module.exports = server
