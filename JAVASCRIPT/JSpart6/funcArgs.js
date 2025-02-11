function printName(fName,lName){
    console.log("Welcome", fName,lName);
}

printName("zoya","shaikh");
printName("zainab","shaikh");

function printInfo(name,age){
    console.log(`${name} is ${age} years old.`);
}

printInfo("zoya",18);
printInfo("zainab");  //undefined

function sum(a,b){
    console.log(a + b);
}
sum(12,10);