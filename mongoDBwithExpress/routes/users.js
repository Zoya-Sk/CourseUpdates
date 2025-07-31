const express = require("express");
const router = express.Router();
const user = require("../models/user");

// GET: Show registration form
router.get("/register",(req,res)=>{
    res.render("users/register");
});

// POST: Handle registration.
router.post("/register", async (req,res)=>{
    const {username, password} = req.body;
    try{
        const user = new User({username, password});
        await user.save();
        //later: log them in here using session...
        res.redirect("/login");
    } catch(err){
        res.status(500).send("Username may already be taken, or error occurred.");
    }
});

// GET: Login form
router.get("/login",(req,res)=>{
    res.render("users/login");
});

// POST: Login user
router.post("/login", async(req,res)=>{
    const {username, password} = req.body;
    const foundUser = await User.findOne({username});
    if(!foundUser){
        return res.status(401).send("Invalid Usernae or password.");
    }
    const valid = await foundUser.checkPassword(password);
    if(!valid){
        return res.status(401).send("Invalid username or password.");
    }

    // save userID in session
    req.session.userId = foundUser._id;
    res.redirect("/messages");
});

// GET: Logout user
router.get("/logout",(req,res)=>{
    req.session.destroy();  // clear the session
    res.redirect("/login");
});


module.exports = router;