const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
        console.log(this);  //prints 'this' keyword's value -> student object
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got average marks = ${avg}.`);
    }
}
console.log(student.getAvg());