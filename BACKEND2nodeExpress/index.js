const express = require("express");
const app = express();

// console.dir(app);

const port = 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get("/", (req,res) =>{
    res.send("Hello I am root!");
});

// app.get("/:username/:id", (req,res) =>{
//     let {username, id} = req.params;
//     // console.log(req.params);
//     res.send(`Welcome to the page of @${username}.`);
// });

app.get("/:username/:id", (req,res)=>{
    let {username,id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
});

app.get("/search", (req,res)=>{
    let { q } = req.query;
    if(!q){
        res.send("<h1>Nothing Searched.</h1>");
    }
    res.send(`Search results for query ${q}.`);
});

// app.get("/apple", (req,res) =>{
//     res.send("You Contacted apple path.");
// });
// app.get("/orange", (req,res) =>{
//     res.send("You Contacted orange path.");
// });

// app.get("*", (req, res) =>{
//     res.send("This path does not exist!");
// });

// app.post("/",(req,res) =>{
//     res.send("You send a post request to root.");
// });

// app.use((req, res) =>{
//     console.log("Request Recieved");
//     // console.log(req);
//     // res.send("This is a basic response");
//     res.send({
//         name:"apple",
//         color:"red"
//     });
// });

// app.use((req, res) =>{
//     console.log("Recieved Request.");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });