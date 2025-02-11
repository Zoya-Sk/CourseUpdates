function multipleGreet(func,n){  // higher order function
    for(let i = 1; i <= n; i++){
        func();
    }
}

let greet = function(){
    // console.log("Hello.");
}

multipleGreet(greet,5);
// multipleGreet(function(){console.log("hola")},5);


// higher order function returns

function oddEvenTest(request){  // factory function -> creates new func
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    } else if(request == "even"){
        return function(n){
            console.log(n%2==0);
        }
    } else{
        console.log("wrong request!");
    }
}

let request = "even";
let func = oddEvenTest(request);
func(3);
func(10);