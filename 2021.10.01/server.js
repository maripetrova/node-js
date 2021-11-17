const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3002;
const mimeTypes = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".png": "img/png",
    ".jpeg": "image/jpeg",
}

const server = http.createServer((req, res) => {
    console.log(req.url)
fs.readFile("./public/index.html", "utf8", (e, d) => {
        res.write(!e ? d : "File error");
        res.end();
    });
})
server.listen(port, err => !err && console.log("Server starting"))