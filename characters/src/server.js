const express = require("express");
const morgan = require("morgan");

const server = express();


server.use(morgan('dev'))
server.use(require("./routes/characters"));

server.use('*', (req, res) => {
    return res.status(404).send('Not found')
})

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })
})


module.exports = server;
