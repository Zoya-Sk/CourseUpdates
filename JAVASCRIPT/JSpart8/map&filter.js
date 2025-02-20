let num = [1,2,3,4];

let double = num.map((el)=>{
    return el*2;
});

// console.log(double);

let students = [{
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

let gpa = students.map((el)=>{
    return el.marks/10;
});

// console.log(gpa);


// FILTER

let even = [1,2,3,4,5,6,7,8,9,90,12,13,141,51];
let ans = even.filter((el)=>{
    return el % 2 == 0;    // even -> true, odd -> false | !(el % 2 == 0);
});

console.log(ans);