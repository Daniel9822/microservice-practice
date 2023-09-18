const { MONGO_URI } = require("./envs")
const mongoose = require("mongoose")

const dbConnect = () => {
  mongoose.set("strictQuery", true)
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((res) => {
      console.log("DATABASE CONNECT")
    })
}

module.exports = dbConnect
