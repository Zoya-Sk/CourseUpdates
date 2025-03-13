let btns = document.querySelectorAll("button");

for(let btn of btns){
    btn.addEventListener("click",()=>{
        console.log("Button was Clicked!");
        btn.innerText = "Done.";
        btn.style.backgroundColor = "greenyellow";
        btn.style.color = "black";
        btn.style.border = "1px solid white"; 
    });
}