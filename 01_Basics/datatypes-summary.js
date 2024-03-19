
// PRIMITIVE data type
// string, number, bigint, boolean, undefined, symbol, null
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // consider always as a empty value

let userEmail
let userTel = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);  // => false

const bigNumber = 2726263627463377n
// console.log(typeof bigNumber);  // => bigint

console.log(typeof score) // => number
console.log(typeof scoreValue) // => number
console.log(typeof isLoggedIn) // => bolean
console.log(typeof outsideTemp) // => object?
console.log(typeof userEmail) // => undefined
console.log(typeof userTel) // => undefined
console.log(typeof bigNumber) // => bigint


// ****************************************************
// REFERENCE (non-primitive) 
// Arrays, Objects, Functions

// Arrays
const colors = ["White", "Black", "Red", "Blue", "Green"];
// console.log(colors); // => [ 'White', 'Black', 'Red', 'Blue', 'Green' ]
// console.log(colors[2]); // => Red

// Objects
const person = {
    name: "John",
    age: 300
}
// console.log(person.name); // => John


// Functions
const myFunction = function(){
    console.log("Hello from function!");
}
// myFunction();  // => Hello from function!

console.log("------------");
console.log(typeof colors) // => object
console.log(typeof person) // => object
console.log(typeof myFunction) // => function

// https://262.ecma-international.org/5.1/#sec-11.4.3
