// const student = {
//     name: "shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         console.log(this);   //prints 'this' keyword's value -> student object
//         let avg = (eng + math + phy) / 3;
//         console.log(avg);
//     }
// }
// console.log(student.getAvg()); // error -> eng,math,phy are not defined


// TO SOLVE THIS AND ACCESS THE VARIABLES, WEW USE 'this' KEYWORD.
// const student = {
//     name: "shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         console.log(this);  //prints 'this' keyword's value -> student object
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got average marks = ${avg}.`);
//     }
// }
// console.log(student.getAvg());


// function getThis(){
//     console.log(this);  // prints -> window object
// }
// console.log(getThis());