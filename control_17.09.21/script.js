let fs = require("fs");

let text = fs.readFileSync("ppl.csv", "utf8");
// let newClass = class Person {
//     constructor(surname, name, docName, gender, birthdate) {
//         this.surname = ;
//         this.name = ;
//         this.docName = ;
//         this.gender = ;
//         this.birthdate = ;
//     }
// }

let arr = text.split(";");
console.log(arr)

for (let i = 0; i <= arr.length; i++) {
    arr[i].JSON
    console.log(arr[i]);

}