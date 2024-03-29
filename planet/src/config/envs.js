require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;

// const DATABASE_SERVICE = process.env.DATABASE_SERVICE_PROD;

const DATABASE_SERVICE =
  NODE_ENV !== "production"
    ? process.env.DATABASE_SERVICE_DEV
    : process.env.DATABASE_SERVICE_PROD;

console.log(DATABASE_SERVICE);
module.exports = {
  DATABASE_SERVICE
};
