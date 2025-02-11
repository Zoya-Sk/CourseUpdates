// Create a function that prints te multiplication table of a number. 
function printTable(num){
    for(let i = num; i <= num * 10; i = i += num){
        console.log(i);
    }
}
printTable(2);
printTable(12);