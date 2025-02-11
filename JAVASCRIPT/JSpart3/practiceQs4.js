/*Create a nested array to show the following ttic-tac-toe game state.
X - null - O
null - X - null
O - null - X
*/
let game = [
    ['X',null,'O'],
    [null,'X',null],
    ['O',null,'X']
];

console.log(game);

game[0][1] = 'O';
console.log(game);