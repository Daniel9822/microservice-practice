const server = require('express')()


server.use(require('./routes/planet'))

module.exports = server