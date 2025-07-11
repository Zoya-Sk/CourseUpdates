const exp = require("constants");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');  // v4 -> version 4 
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love Coding.",
  },
  {
    id: uuidv4(),
    username: "shradhakhapra",
    content: "Hard work is important key to success.",
  },
  {
    id: uuidv4(),
    username: "rahulkumar",
    content: "I got selected for my first Internship.",
  },
];

app.get("/posts", (req, res) => {
    console.log(posts); // Add this
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id",(req,res) =>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{ post });
    // res.send("Request working..");
});

app.patch("/posts/:id",(req,res) =>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res) =>{
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.delete("/posts/:id",(req,res) =>{
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
     res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});
