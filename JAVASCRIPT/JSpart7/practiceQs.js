// WRITE AN ARROW FUNCTION THAT RETURN THE SQUARE OF A NUMBER 'n'.

// using shortcuts for this single line and single arg function.
let square = n =>(n*n);

// console.log(square(2));



// WRITE A FUNCTION THAT PRINTS "Hello World" FIVE TIMES AT INTERVALS OF 2S EACH.

let id = setInterval( ()=>{
    console.log("Hello World");
}, 2000)

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 12000);