const router = require("express").Router();
const Films = require("../../data");

router.get("/films", async (req, res) => {
    const films = await Films.list()
    res.status(200).json(films);
});

module.exports = router;
