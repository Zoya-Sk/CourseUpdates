/*
    ARRAY METHODS: forEach, map, filter, some, every, reduce.
*/


// let arr = [1,2,3,4,5,6];

// let print = function(el){
//     console.log(el);
// }
// console.log(arr.forEach(print));

// arr.forEach(function(el){
//     console.log(el);
// });

// arr.forEach((el)=>{
//     console.log(el);
// });


let arrObj = [{
    name: "aman",
    marks: 95
},
{
    name: "shradha",
    marks: 94.4
},
{
    name: "rajat",
    marks: 92
}];

console.log(arrObj);

arrObj.forEach((student)=>{   // just a parameter
    console.log(student.marks);
})