const sum = function(a,b){
    return a + b;
}
sum(2,3);  // using variable name to call the function

let hello = function(){
    console.log("hello");
}
hello();
hello = function(){
    console.log("hola");
}
hello();