const server = require("express")();

server.use(require('./router/films'))

module.exports = server;
