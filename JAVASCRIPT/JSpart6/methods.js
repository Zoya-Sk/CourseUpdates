// functions created insode an object are called methods.

const calculator = {
    num: 55,
    add: function(a,b){
        return a + b;
    },
    sub: function(a,b){
        return a - b;
    },
    mul: function(a,b){
        return a * b;
    }
};

console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.sub(2,1));

// METHODS SHORTHAND
const short = {
    add(a,b){
        return a + b;
    },
    sub(a,b){
        return a - b;
    }
}
console.log(calculator.add(10,20));