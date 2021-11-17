let lol = require("fs");

// const cb = function (err, data) {
//     console.log(err)
//     console.log(data)
// }
// cb();
// console.log(cb);
let text;
lol.readFile("Node.csv", {encoding: "utf8"}, function (err, data) {
    if (err) {
        throw new Error(err);
    } else {
        text = data
        console.log(data)
    }
    console.log(data)
});     // Путь, кодировка, call back
console.log(text)
setTimeout(() => console.log(text), 2000);