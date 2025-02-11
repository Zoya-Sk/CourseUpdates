// Function Scope
// Global Scope
// Block Scope -> applies only on let, const

let sum = 54; // global scope

function calSum(a,b){
    let sum = a + b; // function scope -> more specific
    // console.log(sum); // function scope prints -> 3
}
calSum(1,2);
// console.log(sum); // global scope prints -> 54

{
    let a = 25;  
}
// console.log(a);  // error

{
    const a = 25;  
}
// console.log(a);  // error

{
    var a = 25;
}
// console.log(a);  // prints

for(let i = 1; i <= 5; i++){
    // console.log(i);  // prints
}


// console.log(i); // error


// LEXICAL SCOPE
function outerFunc(){
    let x = 5;
    let y = 4;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }

    innerFunc();
}

outerFunc();  
innerFunc();  // error due to lexical scope -> inner function is not accessible from outside.