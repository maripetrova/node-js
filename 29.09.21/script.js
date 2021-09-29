const http = require("http");
const port = 3001;
const fs = require("fs");


const server = http.createServer((rec, res) => {
    // res.write("<img src=\"original.jpeg\" type=\"image/jpeg\">");
    let img = fs.readFileSync("./original.jpeg");
    console.log(img);
    // res.write("AAA");
    res.write(img)
    res.end();
})
server.listen(port, err => {
    console.log(`server starting ${port}`);
});
