const express = require("express");
const router = express.Router();
const Message = require("../models/message");

//  Index Route - List all messages.
router.get("/", async(req, res)=>{
    try{
        const messages = await Message.find({});
        res.render("messages/index", { messages });
    }catch(err){
        res.status(500).send("Error Fetching Messages.");
    }
});

// NEW Route - Show form to create new message
router.get("/new",(req,res)=>{
    res.render("messages/new");
});

// CREATE Route - Save ne message to DB
router.post("/",async (req,res)=>{
    const { from, to, message } = req.body;
    try{
        await Message.create({from, to, message});
        res.redirect("/messages");
    }catch(err){
        console.log("Error while creating message:", err);  // 🔍 Add this
        res.status(500).send("Failed to Create message!");
    }
});

// EDIT Route - Show form to edit a message
router.get("/:id/edit",async (req,res)=>{
    try{
        const message = await Message.findById(req.params.id);
        res.render("messages/edit",{message});
    } catch(err){
        res.status(500).send("Message not Found!");
    }
});

// UPDATE Route - Save the Update messages
router.put("/:id", async(req,res)=>{
    const {from, to, message} = req.body;
    try{
        await Message.findByIdAndUpdate(req.params.id, {from, to, message});
        res.redirect("/messages");
    } catch(err){
        res.status(500).send("Failed to Update Message!");
    }
});

// DELETE Route - Delete a message
router.delete("/:id", async(req,res)=>{
    try{
        await Message.findByIdAndDelete(req.params.id);
        res.redirect("/messages");
    } catch(err){
        res.status(500).send("Failed to Delete message!");
    }
});


module.exports = router;