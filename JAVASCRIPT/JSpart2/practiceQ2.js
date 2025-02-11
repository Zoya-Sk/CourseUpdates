/*
A good string is a string that starts with the letter 'a' & has a length > 3. Write a program to find if a string is good or not.
*/
let str = "banana";
if(str[0] === 'A' && str.length > 3){
    // console.log("Good String!");
} else{
    // console.log("Not Good.");
}

let num = 12;
if ((num % 3 === 0) && ((num + 1 === 15) || (num - 1 === 11))) {
    // console.log("Safe.");
} else {
    // console.log("Unsafe.");
}