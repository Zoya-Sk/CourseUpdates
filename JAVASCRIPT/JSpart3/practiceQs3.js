/*For the given array start state of an array, change it to final form using splice.
start:['january','july','march','august'];
end:['july','june','march','august'];
*/
let months = ['january','july','march','august'];
months.splice(0,2,"july","june");
console.log(months);


/*Return the index of the "JavaScript" for the given array,if it was reversed.
['C','C++','HTML','Javascript','Python','Java','C#','SQL']
*/
let langs = ['C','C++','HTML','JavaScript','Python','Java','C#','SQL'];
let newLang = langs.reverse().indexOf("JavaScript");
console.log(newLang);