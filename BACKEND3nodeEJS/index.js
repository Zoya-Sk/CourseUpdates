const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"public/JS")));
app.use(express.static(path.join(__dirname,"public/CSS")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

// app.get("/ig/:username",(req,res)=>{
//     const followers = ["adam","steve","john","bob","charley"];
//     let { username } = req.params;
//     res.render("instagram.ejs",{ username,followers });
// });
app.get("/ig/:username", (req,res)=>{
    let { username } = req.params;
    const instaData = require("./views/data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs",{ data });
    } else{
        res.render("error.ejs");
    }
});

app.get("/hello",(req,res)=>{
    res.send("Hello!");
});
app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });
});

app.listen(port, ()=>{
    console.log(`listening.. on port ${port}.`);
});