// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let random = Math.floor(Math.random() * 10) + 1;
//             console.log(random);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//      getNum();
// }

// demo();

async function colorChange() {
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("green",1000);
     changeColor("blue",1000);
}  // the previous call back hell code now written so clearly and is easy to understands using async await.