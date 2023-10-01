require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;

const DATABASE_SERVICE =
  NODE_ENV === "development"
    ? process.env.DATABASE_SERVICE_DEV
    : process.env.DATABASE_SERVICE_PROD;

module.exports = {
  DATABASE_SERVICE
};
