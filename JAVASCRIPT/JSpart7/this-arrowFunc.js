// normal function's scope -> this - calling object
// Arrow function's lexical scope -> parent - calling scope

const student = {  // global scope
    name: "aman",
    marks: 95,
    prop: this,   // parent related -> global scope 
    getName: function (){
        console.log(this);  // student object
        return this.name;  // aman
    },
    getMarks: () =>{
        console.log(this);  // window object -> because it follows parent's scope and here the parent's scope is 'global'.
        return this.marks;  // undefined
    },
    getInfo1: function(){
        setTimeout( ()=>{
            console.log(this);  // student object -> because arrow function ke liye 'this' uske parent ka 'this' hota hai. or yahan parent hai function() - jiska 'this' hai, student obj.
        }, 2000)
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log(this); // windows object -> kyuki iske liye 'this' hota hai - jisne iss fuction ko call kiya hai. or yahan per setTimeout ne is function ko call kiya jiska window obj ka inbuilt function hai.
        }, 3000);
    }
};

// console.log(student.getName());

// console.log(student.getMarks());

console.log(student.getInfo1());
console.log(student.getInfo2());