const express = require("express");
const port = 3009;

const app = express();

const r1 = require("./server/routes/server.js");

app.use("/", r1);
app.use(express.static("./public"));

app.listen(port, err => {
    console.log("server PORT: " + port)
});

