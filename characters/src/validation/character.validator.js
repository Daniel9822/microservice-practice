const { check, param } = require("express-validator");
const validateResult = require("../utils/resultsValidator");

const characterValidator = [
  check("name").notEmpty().isString(),
  check("height").notEmpty().isString(),
  check("hair_color").notEmpty().isString(),
  check("skin_color").notEmpty(),
  check("eye_color").notEmpty(),
  check("birth_year").notEmpty().isLength({
    max: 4
  }),
  check("gender").notEmpty(),
  check("homeworld").optional(),
  check("films").optional(),
  (req, res, next) => validateResult(req, res, next)
];

const characterValidatorParam = [
  param("id").isMongoId(),
  (req, res, next) => validateResult(req, res, next)
];

module.exports = {
  characterValidator,
  characterValidatorParam
};
