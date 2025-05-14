/* Special file which should be always named as 'index.js' only.
That requires data of all other files , combine them together and then export them.
*/

const apple = require("./apple");
const banana = require("./banana");
const mango = require("./mango");

let fruits = [apple, mango, banana];

module.exports = fruits;