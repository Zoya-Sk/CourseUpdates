// game:

let favMovie = "avatar";

let guess = prompt("Guess my Favourite movie.");

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong Guess. Please try Again.");
}

if(guess == favMovie){
    console.log("Congrats. You guessed it right!");
} else{
    console.log("You Quit");
}