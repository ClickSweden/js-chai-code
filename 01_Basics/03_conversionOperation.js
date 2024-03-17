/*  ********************* CONVERSION ******************** */

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
/*
let isLoggedIn = "33"
console.log(isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// RESULTS (if we convert different types of input)
// 1 => true;  0 => false;
// "" => false;  " " => true;  "abc" => true;

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
*/

/*  ********************* OPERATION ******************** */
/*
let value = 3
let negValue = -value
// console.log(value);
// console.log(negValue);

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2/2); // 1
console.log(2*2); // 4

// EXPONENTIATIONS
console.log(2**2); // => 4  (2, 2x2=4)
console.log(2**3); // => 8  (2, 2x2=4, 4x2=8)
console.log(2**5); // => 32 (2, 2x2=4, 4x2=8, 8x2=16, 16x2=32)
console.log(3**5); // => 243 (3, 3x3=9, 9x3=27, 27x3=81, 81x3=243)

// REMAINDERS ()
console.log(2%2); // 0
console.log(2%10); // 2
console.log(5%10); // 5
console.log(10%5); // 0

console.log(13%5); // => 3
console.log(5%13); // => 5 ()
*/

/*
let str1 = "Hello "
let str2 = " Shezi"
let str3 = str1 + str2
// console.log(str3);

console.log( "1" + 2 )  // => 12
console.log( 1 + "2" )  // => 12

console.log( "1" + 2 + 2 )  // => 122 (if first one is a string would be considered all string)
console.log( 1 + 2 + "2" )  // => 32 (Bad way of coding)

console.log( 3 + 4 + 5 % 3 )   // => 9 (Bad way of coding)
console.log( (3 + 4) + 5 % 3 ) // => 9
*/

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// Study about Prefix and Postfix related things in Docs

// Study more at:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// Study more at ECMA as well: 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
