// create a function that returns the concatenation of all the strings in an array.
let str = ["hi","hello","bye","!"];

function concat(arr){
    let result = "";

    for(let i = 0; i <= str.length; i++){
        result = result + str[i];
    }
    return result;
}
console.log(concat(str)); // find out why undefined prints at the end of the string