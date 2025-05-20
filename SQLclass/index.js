// to run mysql code in vs code terminal ->  & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p

const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "*THIS.is%mySQL#ZOYAka",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Inserting new data
// let q = "INSERT INTO user(id, username, email, password) VALUES (?, ?, ?, ?)";
// let q = "INSERT INTO user(id, username, email, password) VALUES ?";
// let user = ["123","123_newUser","abc@gmail.com","abc"];
// let users = [
//   ["123b", "123_newUserb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_newUserc", "abc@gmail.comc", "abcc"],
// ];

// let data = [];
// for(let i = 1; i <= 100; i++){
//   data.push(getRandomUser());   // 100 fake users - data
//   // getRandomUser();
// }



// Home Route
app.get("/",(req,res)=>{
  let q =  `SELECT count(*) FROM user`;

try {
  connection.query(q, (err, result) => {
    if (err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs",{ count });
  });
} catch (err) {
  console.log(err);
  res.send("Some error in DB");
}
});


// Show Route 
app.get("/user",(req,res) =>{
  let q = `SELECT * FROM user`;

  try{
    connection.query(q, (err,users) =>{
      if(err) throw err;
      res.render("showUsers.ejs", { users });
    });
  } catch(err){
    console.log(err);
    res.send("Some error in DB");
  }
});

// Edit Route
app.get("/user/:id/edit",(req,res) =>{
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
    connection.query(q, (err,users) =>{
      if(err) throw err;

      let user = users[0];
      res.render("edit.ejs",{ user });
    });
  } catch(err){
    console.log(err);
    res.send("Some error in DB");
  }
});

// Update Route
app.patch("/user/:id",(req,res) =>{
  let { id } = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
    connection.query(q, (err,users) =>{
      if(err) throw err;

      let user = users[0];

      if(formPass != user.password){
        return res.send("WRONG password!");
      } else{
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}'`;
        connection.query(q2,(err,result) =>{
          if(err) throw err;
          return res.redirect("/user");
        })
      }
    });
  } catch(err){
    console.log(err);
    res.send("Some error in DB");
  }
});



app.listen("8080",()=>{
  console.log("Server is Listening to port 8080");
});


// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     // console.log(result.length);
//     // console.log(result[1]);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();