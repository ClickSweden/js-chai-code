/* PRACTICE # 1
let score  = 33

console.log(typeof score);
console.table([scoreA,scoreB,scoreC,scoreD,scoreE]);

let valInNumScore  = Number(score)
console.log(typeof valInNumScore);
*/

// RESULTS (if we convert different types of input)
// "33" => 33
// "33xyz" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0;
// ------------------------------------------------

/* PRACTICE 2  */
let isLoggedIn = "abc"
console.log(isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// RESULTS (if we convert different types of input)
// 1 => true;  0 => false;
// "" => false;  " " => true;  "abc" => true;
