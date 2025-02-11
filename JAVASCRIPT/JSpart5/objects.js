const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "delhi"
};

const items = {
    price: 100.99,
    discount: 50,
    colors: ["red","pink"]
};

const post = {
    username: "@shradhakhapra",
    content: "this is my #first post",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege","@delta"]
};

// GET VALUES...
post["content"];
post.likes;

// CONVERSION IN GET VALUES.
const obj = {
    1: "a",
    2: "b",
    null: "d",
    true: "c",
    undefined: "e"
};  // Automatically converts all keys into strings and won't consider as keywords.

// ADD/UPDATE VALUES
student.city = "Mumbai";
student.marks = 'A';  //can change the value to different data types as well.

//to create and add it to existing object:
student.gender = "female";
student.hobbies = ["coding","writing","dancing"];
// console.log(student);

// TO DELETE ANY KEY FROM THE OBJECT:
delete student.marks;  // delete -> operator
console.log(student);