const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req,res,next)=>{
    let { token } = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
}

app.get("/",(req,res)=>{
    res.send("Hi, I am root.");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin in Forbidden");
});

app.get("/api",checkToken,(req,res)=>{
    res.send("Data");
});

// custom error handler
app.use((err,req,res,next)=>{
    let {status = 500, message = "Some Error Occured"} = err;
    res.status(status).send(message);                                                                           
});


// app.use((req,res)=>{
//     res.status(404).send("Page not found!");
// });

app.listen(8080,()=>{
    console.log("Server is running on Port 8080.");
});