let fruits = ["apple","mango","banana","orange"];

for (fruit of fruits) {
    // console.log(fruit);
}

for(char of "apnacollege"){
    // console.log(char);
}

// NESTED FOR-OF LOOPS.
let heroes = [["superman","batman","wonder woman"],["spiderman","ironman","thor"]];

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}