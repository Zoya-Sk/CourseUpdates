/* Qs1.Create a number variable num with some value. Now , print “good” if the number is divisible by 10 and print “bad” if it is not.*/
let num = 50;
if(num % 10 == 0){
    console.log("Good.");
} else{
    console.log("bad");
}

/*
Qs2.Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert (by substituting their name & age):
name is age years old.
[Use template Literals to print this sentence]
*/
let userName = prompt("Enter you name");
let userAge = prompt("Enter you age");
alert(`${userName} is ${userAge} years old`);


/*
Qs3.Write a switch statement to print the months in a quarter. 
Months in Quarter 1:January , February, March 
Months in Quarter 2:April, May, June
Months in Quarter 3:July, August, September
Months in Quarter 4:October, November, December

[Use the number as the case value in switch]
*/
let quarter = 1;

switch(quarter){
    case 1:
        console.log("January , February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Not a Quarter");
}


/*Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5. For a given string print 
if it is golden or not.*/
let str = "apple";




/*
Qs5.Write a program to find the largest of 3 numbers.
*/

/*
 Qs6 (Bonus). 
 Write a program to check if 2 numbers have the same last digit. 
 Eg: 32 and 47852 have the same last digit i.e. 2
 */