// console.log("hello, and welcome to");
// setInterval(() =>{
//     // console.log("Apna college");  // prints on loops after every 2s.
// }, 2000);

let id = setInterval(() => {
    console.log("apna college");
}, 2000);
console.log(id);

let id2 = setInterval(() =>{
    console.log("hello world");
}, 3000);
console.log(id2);

clearInterval(id2); // stops printing.