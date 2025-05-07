// let btn = document.querySelector('button');

// btn.onclick = function(){
//     console.log("Clicked.");
// }

// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     console.log("Hello Zoya");
// }
// btn.onclick = sayHello

// btn.onmouseenter = function(){
//     console.log("You entered a button.");
// }


//EVENT LISTENERS - 

// btn.addEventListener("click",sayHello);
// btn.addEventListener("dblclick",sayHello);
//REFER MDN for morer event listeners. 

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color Updated.");
});

function getRandomColor(){
    let red = Math.floor( Math.random() * 255 );
    let green = Math.floor( Math.random() * 255 );
    let blue = Math.floor( Math.random() * 255 );

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}