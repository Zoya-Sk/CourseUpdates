const sum = (a,b) =>{
    console.log(`Addition of the given 2 numbers is ${a + b}`);
};
// console.log(sum(2,3));


const cube = (n) =>{
    return n*n*n;
};
let c = cube(2);
// console.log(c);


const pow = (x,y) =>{
    return x**y;
};
// console.log(pow(2,4));


// IMPLICIT RETURN IN ARROW FUNCTION.
const mul = (a,b) => (
    a * b   // implicitly (automatically) returns the values.
);

// console.log(mul(2,2));



const div = (a,b) => ( a / b );
console.log(div(10,5));