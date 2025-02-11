const max = prompt("Enter the Maximum number.");

const random = Math.floor( Math.random() * max ) + 1;

let guess = prompt("Guess the Number.");

while(true){
    if(guess == "quit"){
        console.log("User Quit.");
        break;
    }

    if(guess == random){
        console.log("Congratulations!! You are right! The number was",random);
        break;
    } else if(guess < random){
        guess = prompt("hint: Your guess was too small. Please try again.");
    } else{
        guess = prompt("hint: Your guess was too large. Please try again.");
    }
}