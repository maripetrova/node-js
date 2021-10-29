const {response} = require("express");
const router = require("express").Router();
const links = ["About", "Contacts", "FaQ"]
// router.get("/", (rq, rs) => {
//     // rs.send("<h1>Hello!</h1>");
//     rs.render("page", {caption: "Hello!"});
// });
//
// router.get("/page", (rq,rs) => {
//     rs.render("page", {caption: "Dilly Page"});
// });

router.get("/", (req, res) => {
    res.render("index", {
        title: "Main page",
        caption: "Главная страница",
        links: links
    })
})
router.get("/page/:name", (req, res) => {
    res.render("page", {
        title: "Page",
        caption: req.params.name,
        links: links
    })
})

module.exports = router;