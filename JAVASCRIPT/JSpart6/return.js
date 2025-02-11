function sum(a,b){
    console.log("hello");
    console.log("hii!");
    return a + b;
    console.log("bye");  // unreachable code
}

// let s = sum(sum(1,2),3);
// let x = sum(2,4);
// console.log(x);

function isAdult(age){
    if(age >= 18){
        return "Adult";
    } else{
        return "Not Adult!";
    }
    console.log("bye"); //unreachable code
}
isAdult(21);