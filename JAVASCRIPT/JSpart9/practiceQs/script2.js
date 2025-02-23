// PRACTICE QUESTIONS:
/*
Add the following elements to the container using only JavaScript and the DOM methods.
1. a <p> with red text that says "Hey I am red!"
2. an <h3> with blue text that says "I'm a blue h3!"
3. a <div> with a black border and pink background color with the following elements inside of it:
 - another <h1> that says "I'm in a div!"
 - a <p> that says "ME TOO!"
*/

// 1st - 
let para1 = document.createElement('p');
para1.innerText = "Hey I am red!";
document.querySelector('body').append(para1);

para1.classList.add("red");

let heading3 = document.createElement('h3');
heading3.innerText = "I'm a blue h3!";
document.querySelector('body').append(heading3);

heading3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm in a div!";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);

div.classList.add('box');
document.querySelector('body').append(div);