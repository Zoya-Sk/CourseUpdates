/*
let h1 = document.querySelector("h1");

setTimeout(() => {
    h1.style.color = "red";
}, 1000);

setTimeout(() => {
    h1.style.color = "orange";
}, 2000);

setTimeout(() => {
    h1.style.color = "green";
}, 3000);
*/  // bulky

let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed.");
        },delay);
    })
}
changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow color was completed");
})
// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("green",1000,()=>{
//             changeColor("purple",1000,()=>{
//                 changeColor("yellow",1000,()=>{
//                     changeColor("blue",1000);
//                 });
//             });
//         });
//     });
// });
// callbacks nesting -> call back hell
