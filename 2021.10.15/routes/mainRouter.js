const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("main page")
});

router.get("/2", (req, res) => {
    res.send("main page 2")
});

module.exports = router;

