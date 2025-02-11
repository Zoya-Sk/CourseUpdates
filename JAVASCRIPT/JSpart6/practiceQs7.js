// Guess the output of the following code.
let greet = "hello";  //global scope

function changeGreet(){
    let greet = "hola";  // function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);  // lexical scope
    }
}

console.log(greet);
changeGreet();