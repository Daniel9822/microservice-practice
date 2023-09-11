const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(
    "/characters",
    createProxyMiddleware({
        target: "http://localhost:3000",
        changeOrigin: true,
    })
);
server.use(
    "/films",
    createProxyMiddleware({
        target: "http://localhost:3001",
        changeOrigin: true,
    })
);
server.use(
    "/planet",
    createProxyMiddleware({
        target: "http://localhost:3002",
        changeOrigin: true,
    })
);

module.exports = server;
