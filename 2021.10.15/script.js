/*
*   CRUD
* Create Read Update Delete
*  POST  GET   PUT   DELETE
*
* RESTfull-API
*
* REST-API(without PUT & DELETE)
** Create Read Update Delete
*  POST  GET   POST   GET/POST
* */

const exp = require("express");
const PORT = 3000;

const r1 = require("./routes/mainRouter")
const r2 = require("./routes/additionalRouter")

const server = exp();

server.get("/", (req,res) => {
    res.send("SWAG")
})
server.use("/main", r1);
server.use("/add", r2);

server.listen(PORT);