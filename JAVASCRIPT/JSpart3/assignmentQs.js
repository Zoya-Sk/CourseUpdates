/**
Q1. Get the first n elements of an array
Write a JavaScript program to get the first n elements of an array. n can be any positive number.

Example:
Input: arr = [7, 9, 0, -2], n = 3  
Output: [7, 9, 0]
 */
let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(0,n);
// console.log(ans);




/*
Q2. Get the last n elements of an array
Write a JavaScript program to get the last n elements of an array. n can be any positive number.

Example:
Input: arr = [7, 9, 0, -2], n = 3  
Output: [9, 0, -2]
*/
let arr2 = [7,9,0,-2];
let num = 3;
let ans2 = arr2.slice(arr2.length - n);
// console.log(ans2);



/*
Q3. Check if a string is blank
Write a JavaScript program to check whether a given string is blank or not.

Example:
Input: str = ""  
Output: true  

Input: str = "Hello"  
Output: false
*/
let str = "hello";
if(str == ""){
    // console.log(true);
} else{
    // console.log(false);
}





/*
Q4. Check if a character at a given index is lowercase
Write a JavaScript program to test whether the character at a given index in a string is lowercase.

Example:
Input: str = "Javascript", index = 4  
Output: true  

Input: str = "JavaScript", index = 0  
Output: false
 */
let str2 = "Javascript";






/*
Q5. Trim leading and trailing spaces from a string
Write a JavaScript program to strip leading and trailing spaces from a string.

Example:
Input: str = "   Hello World!   "  
Output: "Hello World!"
 */



/*
Q6. Check if an element exists in an array
Write a JavaScript program to check whether an element exists in an array or not.

Example:
Input: arr = [10, 20, 30, 40], element = 20  
Output: true  

Input: arr = [10, 20, 30, 40], element = 50  
Output: false
 */