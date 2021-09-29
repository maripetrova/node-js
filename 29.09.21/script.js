const http = require("http");
const port = 3001
const server = http.createServer((rec, res) => {
    res.write("<img src=\'original.jpeg\'>");
    res.end();
})
server.listen(port, err => {
    console.log(`server starting ${port}`)
});
