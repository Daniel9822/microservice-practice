const { check, param } = require("express-validator");
const validateResult = require("../utils/validateResults");

const planetCreateValidator = [
  check("name").notEmpty().isString(),
  check("films").isArray().optional(),
  check("residents").isArray().optional(),
  check("surface_water").notEmpty().isString(),
  check("terrain").notEmpty().isString(),
  check("gravity").notEmpty().isString(),
  check("climate").notEmpty().isString(),
  check("diameter").notEmpty().isString(),
  check("orbital_period").notEmpty().isString(),
  check("rotation_period").notEmpty().isString(),
  (req, res, next) => validateResult(req, res, next)
];

const planetParamValidate = [
  param("id").isMongoId(),
  (req, res, next) => validateResult(req, res, next)
];

module.exports = {
  planetCreateValidator,
  planetParamValidate
};
