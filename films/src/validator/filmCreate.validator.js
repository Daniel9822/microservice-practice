const { check, param } = require("express-validator");
const validateResult = require("../utils/validateResults");

const filmCreateValidator = [
  check("title").notEmpty().isString(),
  check("opening_crawl").notEmpty().isString(),
  check("director").notEmpty().isString(),
  check("producer").notEmpty().isString(),
  check("release_date").notEmpty().isString(),
  check("characters").optional(),
  check("planets").optional(),
  (req, res, next) => validateResult(req, res, next)
];

const filmsValidationParam = [
  param("id").isMongoId(),
  (req, res, next) => validateResult(req, res, next)
];

module.exports = {
  filmCreateValidator,
  filmsValidationParam
};
