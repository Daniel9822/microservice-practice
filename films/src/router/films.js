const router = require("express").Router();
const controllers = require('../controller')


router.get("/films", controllers.getFilms);

module.exports = router;
