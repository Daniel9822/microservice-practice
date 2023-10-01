const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const proxyReq = require("./utils/proxyReq");
const routeEnv = require("./utils/envs");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(
  "/characters",
  createProxyMiddleware({
    target: routeEnv.character,
    changeOrigin: true,
    onProxyReq: proxyReq
  })
);
server.use(
  "/films",
  createProxyMiddleware({
    target: routeEnv.films,
    changeOrigin: true,
    onProxyReq: proxyReq
  })
);
server.use(
  "/planet",
  createProxyMiddleware({
    target: routeEnv.planets,
    changeOrigin: true,
    onProxyReq: proxyReq
  })
);

module.exports = server;
