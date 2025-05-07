let btn = document.querySelector('button');

btn.onclick = function(){
    console.log("Clicked.");
}

function sayHello(){
    alert("Hello!");
}
btn.onclick = sayHello

btn.onmouseenter = function(){
    console.log("You entered a button.");
}