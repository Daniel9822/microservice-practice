const express = require("express");
const server = express();

server.use(express.json());

server.use(require("./router/films"));

server.use("/", (req, res) => {
    res.status(200).send("hola mundo");
});
server.use("*", (req, res) => {
    res.status(404).send("not found");
});

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    });
});

module.exports = server;
