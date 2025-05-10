function hello(){
    console.log("inside hello fnx");
    console.log("Hello!");
}

function demo(){
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();

console.log("done, Bye!");