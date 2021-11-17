const express = require("express");
const app = express();
const port = 3009;

app.use(express.static("./public"))
// app.get("/", (req, res) => {
//     res.send(`
//         <h1>Pipchik</h1>
//         <ul>
//             <li><a href="/pip">pip</a></li>
//             <li><a href="/pup">pup</a></li>
//         </ul>
//     `)
// })
app.get("/", (req, res) => {
    res.send("")
})
app.get("/pip", (req, res) => {
    res.send("<h1>Pipi pupu cheeek</h1>")
})
app.get("/pup", (req, res) => {
    res.send("<h1>Pupu pipi cheeek</h1>")
})

app.listen(port, err => {
    console.log("Server ???????????")
});
