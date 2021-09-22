let per = require("fs");
let text = per.readFileSync("ppl.csv", "utf8");

let textArr = text.split("\n");
let textArrDubl = [];

textArr.forEach((e) => {
    textArrDubl.push(e.split(";"))
})
textArrDubl.forEach((e) => {
    e.pop()
})

let Person = class  {
    constructor(name, surname, gender, birthday) {
        this.name = name;
        this.surname = surname;
        this.docName = `${this.name[0]}. ${this.surname}`;
        this.birthday = birthday;
        this.gender = gender;
    }
}
let arrObj = [];
for (let i = 0; i < textArrDubl.length; i++) {
    arrObj.push(new Person(...textArrDubl[i]));
}

let female = [];
for (let i = 0; i < arrObj.length; i++) {
    if (arrObj[i].gender === "female") {
        female.push(arrObj[i].docName);
    }
}
console.log(female)