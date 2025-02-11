/*
For the given string:
let msg = "Hello!";
Trim it & convert it to UpperCase
*/
let msg = "Hello!";
console.log(msg.trim().toUpperCase());

/*
For the string -> let name = "Apna College", predict the output for following:
name.slice(4,9);
name.indexOf("na");
name.replace("Apna","Our");
*/
let fname = "ApnaCollege";
fname.slice(4,9);
fname.indexOf("na");
fname.replace("Apna","Our");

/*
Separate the "College" part in above string & replace 'l' with 't' in it. 
*/
console.log(fname.slice(4).replace('l','t').replace('l','t'));