const http = require("http");
const server = http.createServer((req, res) => {
    // request - запрос от пользователя
    // response - ответ сервера
    res.write(`<h1 
                            style ="
                                background:#222;
                                color:greenyellow;
                                text-align: center;"
                                >Hey!</h1>`);
    res.end();
})
// const https = require("https");
// методы передачи данных (get / post / put / delete)

server.listen(3000, err => {
    if(err) {
        console.log("All so sad")
    } else {
        console.log("Good job!")
    }
});
// 3000, 4000, 5000

// 127.0.0.1:3000 - альтернатива localhost

