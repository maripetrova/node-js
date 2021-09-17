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

let arr = text.split("\n");
console.log(arr)
array = [];
// for (let i = 0; i <= arr.length; i++) {
//     let strArr = arr[i];
//     let r = strArr.split(" ");
//     console.log(strArr);
// }
arr.forEach(element => {
    let strArr = element;
    let firstArr = strArr.split(`;`);
    console.log(firstArr);
    array.push(firstArr);
    console.log(array);
})
array.forEach((e) => {
    e.pop()
})
console.log(array);