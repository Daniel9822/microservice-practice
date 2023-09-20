const express = require("express")
const morgan = require("morgan")

const server = express()

server.use(morgan("dev"))
server.use(express.json())
server.use("/database", require("./routes"))

server.use((err, req, res, next) => {
  res.status(err?.statusCode || 500).send({
    error: true,
    message: err.message
  })
})

module.exports = server
