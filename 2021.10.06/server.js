const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3003;
const mimeTypes = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".png": "img/png",
    ".jpeg": "image/jpeg"
}

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/") {
        fs.readFile("./public/index.html", "utf8", (e, d) => {
            res.write(!e ? d : "File error");
            res.end();
        });
    }
    // else {
    //     let fileExt = req.url.split(".");
    //     fileExt = "." + fileExt[fileExt.length - 1];
    //     // console.log(fileExt);
    //     res.writeHead(200, {
    //         "Content-Type": mimeTypes[fileExt]
    //     })
    //     if(fileExt === ".png" || fileExt === ".jpeg" || fileExt === ".jpg") {
    //         fs.readFile("./public" + req.url, ( d) => {
    //             res.write(d, "binary");
    //             res.end();
    //         })
    //     } else {
    //         fs.readFile("./public" + req.url, (d) => {
    //             res.write(d, "utf8");
    //             res.end();
    //         })
    //     }
    // }
});
server.listen(port, err => !err && console.log("Server starting"))


