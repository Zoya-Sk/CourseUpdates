// console.log("hello");
// console.log("hello");
// console.log(a);  // error -> a is not defined
// console.log("hello");  // code from here won't be executed due error above.
// console.log("hello");
// console.log("hello");

// TO SOLVE THIS PROBLEM WE USE TRY - CATCH BLOCKS.
console.log("hello");
console.log("hello2");
// let a = 5;
try{
    console.log(a);
} catch(err){  // will catch the error that occurred.
    console.log("error caught. a is not defined...");
    console.log(err); // prints the error....
}
console.log("hello3");
console.log("hello4");