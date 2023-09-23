const proxyReq = (proxyReq, req, res) => {
  if (req.body) {
    const bodyData = JSON.stringify(req.body)
    proxyReq.setHeader("Content-Type", "application/json")
    proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData))
    proxyReq.write(bodyData)
  }
}

module.exports = proxyReq
