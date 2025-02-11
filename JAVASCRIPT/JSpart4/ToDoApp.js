let todo = [];

let req = prompt("Please enter your request.");

console.log(req);

while(true){
    if(req == "quit"){
        console.log("Quitting App");
        break;
    }

    if(req == "task"){
        console.log("--------------");
        for(task of todo){
            console.log(task);
        }
        console.log("--------------");
    } else if(req == "add"){
        let task = prompt("Please enter the task you want to add.");
        todo.push(task);
        console.log("Task Added.");
    } else if(req == "delete"){
        let idx = prompt("Please enter the task Index."); 
        todo.splice(idx,1);
        console.log("task deleted");
    }

}