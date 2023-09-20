const express = require("express")
const morgan = require("morgan")
const { createProxyMiddleware } = require("http-proxy-middleware")
const proxyReq = require("./utils/proxyReq")

const server = express()

server.use(express.json())
server.use(morgan("dev"))

server.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:3000",
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)
server.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:3001",
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)
server.use(
  "/planet",
  createProxyMiddleware({
    target: "http://planet:3002",
    changeOrigin: true,
    onProxyReq: proxyReq
  })
)

module.exports = server
