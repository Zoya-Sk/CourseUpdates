const express = require("express");
const app = express();

// middleware => can send response already..
// app.use((req,res,next)=>{
//     console.log("Hi, I am a Middleware.");
//     // res.send("Middleware Finished.");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Hi, I am 2nd Middleware");
//     next();
// });

app.use((req,res,next)=>{
    console.log(req);
    next();
})

app.get("/",(req,res)=>{
    res.send("Hi I am root.");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.listen(8080,()=>{
    console.log("Server listening to port 8080..");
});