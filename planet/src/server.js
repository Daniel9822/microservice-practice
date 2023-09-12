const response = require("./utils/response");

const server = require("express")();

server.use(require("./routes/planet"));

server.use("/", (req, res) => {
    response(res, 404, "not found");
});

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    });
});

module.exports = server;
