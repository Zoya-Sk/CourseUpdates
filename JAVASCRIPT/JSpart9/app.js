// METHODS:

// document.getElementById(mainImg);
// output -> null : because it is considering mainImg as a variable.

// document.getElementById("mainImg");
// document.getElementById("description");
// document.getElementsByClassName("oldImg");


// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++){
//     // console.dir(smallImages[i]);
//     console.dir(smallImages[i].src);
// }

// for(let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`Value of image no. ${i} is changed.`);
// }

// document.getElementsByTagName("p");


// QUERY SELECTORS:  ALLOWS US TO USE ANY 'CSS' SELECTORS.
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));



// SETTING CONTENT IN OBJECTS:

// let para = document.querySelector('p');
// para.innerText -> shows visible text in the node  - takes the content from what is visible on the browser screen
// para.innerHTML -> shows the full markup
// para.textContent -> shows all the text (hidden as well)  - takes the content from HTML file


// para.innerText = "abc";


// let heading = document.querySelector('h1');
// heading -> <h1>​Spider Man​</h1>​
// heading.innerHTML = "<u>IronMan</u>"; -> '<u>IronMan</u>'



// MANIPULATING ATTRIBUTES: 

// let img = document.querySelector('img');   -> undefined

// img -> <img src=​"assets/​spiderman_img.png" id=​"mainImg">
// img.getAttribute('id'); -> 'mainImg'

// img.setAttribute('id','spidermanimg');
// img.getAttribute('id'); -> 'spidermanimg'


// let heading = document.querySelector('h1');
//heading.style.color = 'purple'; -> 'purple'

// heading.style.backgroundColor = 'yellow';  ->'yellow'


// let links = document.querySelector(".box a");

// for(let i = 0; i < links.length; i++){
//     links[i].style.color = "purple";  // inline styling
// }



// CLASSLIST PROPERTY:
// let img = document.querySelector('img');
// img.classList

// let heading = document.querySelector('h1');
// heading.classList -> empty list
// heading.classList.add('abc');

// heading.classList.remove('abc');

// heading.classList.contains('abc');  -> false

// heading.classList.toggle('abc');  -> true

// heading.classList.toggle('abc');  -> false

// heading.classList.toggle('abc');  -> true

// heading.classList.toggle('abc');   ->  false




// NAVIGATION:
// SELECTING PARENT - (single)
// let h4 = document.querySelector('h4');
// h4.parentElement

// SELECTING CHILDREN -(multiple)
// let box = document.querySelector('.box'); 
// box.children  -> 2 childs
// box.childElementCount;   ->  2


// let img = document.querySelector('img');
// img.previousElementSibling  ->  <h1>Spider Man</h1>
// img.previousElementSibling.style.color = "green";  -> 'green'



// ADDING ELEMENTS ON PAGE:
// let newPara = document.createElement('p');
// console.dir(newPara);
// newPara.innerText = " hii i am a new para";


// DISPLAYING ON BROWSER SCREEN:
// let body = document.querySelector('body');
// body.appendChild(newPara);   -> <p>​ hii i am a new para​</p>​
// let box = document.querySelector(".box");  
// box.appendChild(newPara);    -> adds text inside the box


// let btn = document.createElement("button");
// btn.innerText = "click me!";
// let box = document.querySelector('.box');
// box.appendChild(btn);

// newPara.append("more text added");
// newPara.append(btn);

// box.prepend(newPara);


// let btn = document.createElement('button');
// btn.innerHTML = "NEW BUTTON!";  -> 'NEW BUTTON!'

// let p = document.querySelector('p');
// btn
// p 
// p.insertAdjacentElement('beforebegin',btn);  -> 'NEW BUTTON!'
// p.insertAdjacentElement('afterbegin',btn);  -> 'NEW BUTTON!'
// p.insertAdjacentElement('beforeend',btn);  -> 'NEW BUTTON!'
// p.insertAdjacentElement('afterend',btn);  -> 'NEW BUTTON!'


// REMOVING ELEMENTS:
// btn.remove
// body.removeChile(btn);