// note: abhi tak kuch bhi run nhi kiya h, so 1st turn on mongoDB [shell on terminal] connect to local host and run for once...

const express = require("express");
const ejs = require("ejs");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const exp = require("constants");
const session = require("express-session");

const app = express();

// connect to mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/whatsappApp")
.then(()=>{
    console.log("MongoDB Connected.");
})
.catch((err)=>{
    console.log("MongoDB err:", err);
});

// set view engine
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

// middleware
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// Sessions -> to remember logged in user
app.use(session({
    secret:"thisshouldbebettersecret!",
    resave:false,
    saveUninitialized:false
}));

// routes
const messageRoutes = require("./routes/messages");
app.use("/messages", messageRoutes);
const userRoutes = require("./routes/users");
app.use(userRoutes);


// root route
app.get("/", (req,res)=>{
    res.redirect("/messages");
});

// server start
app.listen(8080,()=>{
    console.log("Server running on port 8080...");
});



