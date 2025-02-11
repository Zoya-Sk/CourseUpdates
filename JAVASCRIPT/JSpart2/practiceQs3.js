/*
Use switch statement to print the day of the week using a number variable 'day' with value 1 to 7.
1 = monday , 2 = tuesday and so on..
*/

let day = 4;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday, fun day!");
        break;
    default:
        console.log("You are from different planet!");
}