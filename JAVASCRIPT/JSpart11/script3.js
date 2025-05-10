// synchronous nature
let a = 10;
console.log(a);
let b = 20;
console.log(b);
let c = 30;
console.log(c);
// JS single threaded nature -> execution one after the other.


// asynchronous nature
setTimeout(() => {
    console.log("Apna college");
}, 2000);
setTimeout(() => {
    console.log("Hello world");
}, 2000);

console.log("Hello...");