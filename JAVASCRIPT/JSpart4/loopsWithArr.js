let fruits = ["apple","mango","banana","litchi","orange"];

for(let i = 0; i < fruits.length; i++){
    // console.log(i, fruits[i]);
}

// console.log("even");
for(let i = 2; i < fruits.length; i = i + 2){
    // console.log(i, fruits[i]);
}

for(let i = fruits.length-1; i >= 0; i--){
    // console.log(i,fruits[i]);
}

// NESTED LOOPS WITH NESTED ARRAYS.
// let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

// for(let i = 0; i < heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(j = 0; j < heroes[i].length; j++){
//         console.log(`j = ${j} ${heroes[i][j]}`);
//     }
// }

let student = [["aman",95],["shradha",94.4],["karan",100]];

for(let i = 0; i < student.length; i++){
    console.log(`info of student #${i+1}`);
    for(let j = 0; j < student[i].length; j++){
        console.log(student[i][j]);
    }
}