const router = require("express").Router();
const { getCharacters } = require("../controllers");


router.get("/characters", getCharacters);

module.exports = router;
