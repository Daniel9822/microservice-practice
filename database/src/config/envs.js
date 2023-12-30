require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;

let MONGO_URI = process.env.MONGO_URI;

if (NODE_ENV !== "production") {
  MONGO_URI = process.env.MONGO_TEST;
}

module.exports = {
  MONGO_URI,
  NODE_ENV
};
