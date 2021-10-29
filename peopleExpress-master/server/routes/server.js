const router = require("express").Router();

router.get("/personal", (req,res) => {
    const name = req.query.name;
    const img = req.query.img;
    // console.log(req.query);
    res.send(`
        <div>
            <img src="${img}" alt="${name}">
            <h1>${name}</h1>
        </div>
    `);
})

module.exports = router;