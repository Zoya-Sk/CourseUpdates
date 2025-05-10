async function greet(name) {
    console.log(`Hello ${name}!`);
}  // promise : fulfilled

async function greet(name) {
    abc.abc(); // will throw error...
    console.log(`Hello ${name}!`);
}  // promise : rejected

async function greet(name) {
    throw "Some random error." // to throw error...
    console.log(`Hello ${name}!`);
}  // promise : rejected

greet()
.then((result)=>{
    console.log("Promise was resolved.");
    console.log("Result was : ",result);
})
.catch((err)=>{
    console.log(`Promise was rejected with error : ${err}.`);
})

// arrow function - async
let demo = async ()=>{
    return 5;
}