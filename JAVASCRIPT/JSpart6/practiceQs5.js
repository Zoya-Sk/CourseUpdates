// Create a function that returns the sum of numbers from 1 to n.

function returnSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(returnSum(500));

