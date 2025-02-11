let cars = ["maruti","toyota","audi","xuv"];
cars.push("bmw");
// console.log(cars) 

// console.log(cars.pop());

cars.unshift("toyota-2");
// console.log(cars);
cars.shift();
// console.log(cars);

let primary = ["red","yellow","green"];
// console.log(primary.indexOf("yellow"));
// console.log(primary.indexOf("blue"));
// console.log(primary.indexOf("YELLOW"));

// console.log(primary.includes("red"));
// console.log(primary.includes("toyota"));

let first = ["chocolate","biscuit","cake"];
let second = ["chips","rolls","chana"];

console.log(first.concat(second));
console.log(first.reverse());  // changes original array

first.slice(1,2);
first.slice(-2); //last two elements

//splice() changes ORIGINAL array

cars.sort();