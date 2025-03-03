// STARTING WITH NODE.JS

// let n = 5;
// for(let i = 0; i <= n; i++){
//     console.log("Hello, " + i);
// }
// console.log("Bye!");

/* Let's run this using terminal:
- Command Lists -> 
1. cd \Desktop\ApnaCollegeCourseStudies\BACK-END

2. touch script.js -> [creates a file]

3. node script.js  -> [To run this code] :
expected output = Hello, 0
Hello, 1
Hello, 2
Hello, 3
Hello, 4
Hello, 5
Bye!
 
*/

/*
Some other commands -> 
1. node
2. process
3. process.version
4. process.release
5. process.cwd()
6. process.argv
to exit -> .exit
*/

// console.log(process.argv);

// let args = process.argv;
// for(let i = 2; i < args.length; i++){
//     console.log("Hello to " + args[i]);
// }  


/*
To run on terminal:
 node .\script.js shradha zoya zainab sania rajat aman
Output ->
Hello to shradha
Hello to zoya
Hello to zainab
Hello to sania
Hello to rajat
Hello to aman
*/

// const math = require("./math");

// console.log(math);
// console.log(math.sum(2,2));
// console.log(math.PI);



// const fruitsInfo = require("./Fruits");

// console.log(fruitsInfo);

// console.log(fruitsInfo[2]);
// console.log(fruitsInfo[1].color);


// USING IMPORT 
import {sum,PI} from "./math.js";
console.log(sum(1,2));
console.log(PI);