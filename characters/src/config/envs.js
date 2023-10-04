require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;

const DB_SERVICE = process.env.DATABASE_SERVICE_PROD;

/**const DB_SERVICE =
  NODE_ENV === "development"
    ? process.env.DATABASE_SERVICE_DEV
    : process.env.DATABASE_SERVICE_PROD; */

module.exports = {
  DB_SERVICE
};
