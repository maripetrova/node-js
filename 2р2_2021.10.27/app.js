const express = require("express");
const server = require("./server/routes/server");

const app = express();

app.set("views", "./server/views"); // подключаем папку с шаблонами
app.set("view engine", "hbs");

app.use(express.static("./public"));
app.use("/", server);

app.listen(2710, (e) => e ? "" : console.log("Server running"));