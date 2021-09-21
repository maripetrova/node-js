let fs = require("fs");
let text = fs.readFileSync("ppl.csv", "utf8");

let textArr = text.split("\n");
let textArrArr = [];

textArr.forEach((e) => {
    textArrArr.push(e.split(";"))
})
textArrArr.forEach((e) => {
    e.pop()
})

let Person = class  {
    constructor(name, surname, birthday, gender) {
        this.name = name;
        this.surname = surname;
        this.docName = `${this.name[0]}. ${this.surname}`;
        this.birthday = birthday;
        this.gender = gender;
    }
}

let arrObj = [];
for (let i = 0; i < textArrArr.length; i++) {
    arrObj.push(new Person(...textArrArr[i]));
}
console.log(arrObj)


