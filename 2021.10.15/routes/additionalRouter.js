const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("minni page")
});

router.get("/2", (req, res) => {
    res.send("go away!")
});

module.exports = router;