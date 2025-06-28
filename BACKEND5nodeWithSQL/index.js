const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '*THIS.is%mySQL#ZOYAka',
});

// inserting into new data
// let q = "INSERT INTO user(id,username,email,password) VALUES(?,?,?,?)";
let q = "INSERT INTO user(id,username,email,password) VALUES ?";
// let user = ["123","abc_newUser","123@email.com", "abc"];
let user = [
  ["789","ghi_thirdUser","789@email.com", "ghi"],
  ["100","zzz_fourUser","100@email.com", "zzz"]
];

try{
  conn.query(q, [user], (err,result)=>{
    if(err) throw err;
    console.log(result);
})
} catch(err){
  console.log(err);
}

conn.end();

let getRandomUser = ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

// console.log(getRandomUser());