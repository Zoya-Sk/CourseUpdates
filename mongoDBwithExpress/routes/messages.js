const express = require("express");
const router = express.Router();
const Message = require("../models/message");
const user = require("../models/user");

const loginRequired = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }
  next();
};

//  Index Route - List all messages.
router.get("/", loginRequired, async (req, res) => {
  const userId = req.session.userId;

  try {
    const messages = await Message.find({
      $or: [
        { from: userId },
        { to: userId }
      ]
    })
    .populate("from")
    .populate("to");

    res.render("messages/index", { messages });
  } catch (err) {
    res.status(500).send("Error Fetching Messages.");
  }
});


// NEW Route - Show form to create new message
router.get("/new", loginRequired, (req, res) => {
  res.render("messages/new");
});

// CREATE Route - Save ne message to DB
const User = require("../models/user"); // make sure this is imported

router.post("/", loginRequired, async (req, res) => {
  const { to, message } = req.body;

  try {
    const toUser = await User.findOne({ username: to });
    if (!toUser) {
      return res.status(400).send("Recipient username not found.");
    }

    await Message.create({
      from: req.session.userId,
      to: toUser._id, // store as ObjectId instead of string
      message
    });

    res.redirect("/messages");
  } catch (e) {
    res.status(500).send("Error sending message.");
  }
});


// EDIT Route - Show form to edit a message
router.get("/:id/edit", loginRequired, async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.render("messages/edit", { message });
  } catch (err) {
    res.status(500).send("Message not Found!");
  }
});

// UPDATE Route - Save the Update messages
router.put("/:id", loginRequired, async (req, res) => {
  const { from, to, message } = req.body;
  try {
    await Message.findByIdAndUpdate(req.params.id, { from, to, message });
    res.redirect("/messages");
  } catch (err) {
    res.status(500).send("Failed to Update Message!");
  }
});

// DELETE Route - Delete a message
router.delete("/:id", loginRequired, async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.redirect("/messages");
  } catch (err) {
    res.status(500).send("Failed to Delete message!");
  }
});

module.exports = router;
