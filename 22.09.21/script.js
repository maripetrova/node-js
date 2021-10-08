const f = require("./functions.js");

function Auto(a, b, c) { // функция - конструктор
    this.model = a;
    this.color = b;
    this.year = c;
}
Auto.prototype.changeColor = function () {
    this.color = `rgb(${f.getNumber(256)}, ${f.getNumber(256)}, ${f.getNumber(256)})`
}

let cnt = 100, park = [];

while(cnt--) {
    park.push(new Auto("Tesla", "rgb(45, 154, 89)", 2020));
}
for(let i = 0; i < park.length; i++) {
    park[i].changeColor();
}
park.sort((a, b) => {
    return a.color > b.color ? 1 : -1
})
console.log(park[0].toString())


