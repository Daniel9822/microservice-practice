const router = require("express").Router()
const fs = require("fs")

const removeExt = (filename) => {
  return filename.split(".").shift()
}

const PATH = __dirname

fs.readdirSync(PATH).filter((filename) => {
  const name = removeExt(filename)

  if (name !== "index") {
    router.use(`/${name}`, require(`./${filename}`))
  }
})

module.exports = router
