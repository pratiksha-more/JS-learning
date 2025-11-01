"use strict"; // Enforce strict mode for better error checking

//alert(3+3) // we are using nodejs so alert will not work , it work in browser

// Data Types in JavaScript
// Primitive Types : string, number, boolean, null, undefined, symbol, bigint

// 1. String

let firstName = "John"; // Using double quotes
let lastName = 'Doe';   // Using single quotes
let fullName = `Mr. ${firstName} ${lastName}`; // Using backticks (template literals)

console.log(typeof firstName); // Checking the type of firstName
console.log(typeof lastName);  // Checking the type of lastName
console.log(typeof fullName); // Checking the type of fullName  

// 2. Number

let age = 30;           // Integer
let height = 5.9;      // Floating-point number


console.log(typeof age);    // Checking the type of age
console.log(typeof height); // Checking the type of height

// 3. Boolean

let isEmployed = true;
let hasDrivingLicense = false;

console.log(typeof isEmployed);
console.log(typeof hasDrivingLicense);

// 4. Null

let middleName = null; // Explicitly set to null

console.log(typeof middleName); // Note: This will return 'object' due to a historical bug in JavaScript

// 5. Undefined

let nickName; // Declared but not assigned

console.log(typeof nickName); // Checking the type of nickName

// 6. Symbol

let uniqueID = Symbol('id');

console.log(typeof uniqueID); // Checking the type of uniqueID

// 7. BigInt

let bigNumber = BigInt(9007199254740991); // Using BigInt constructor
let anotherBigNumber = 9007199254740991n; // Using 'n' suffix

console.log(typeof bigNumber);
console.log(typeof anotherBigNumber);

// Summary Table of Data Types
console.table({
  firstName,
  lastName,
  fullName,
  age,
  height,
  isEmployed,
  hasDrivingLicense,
  middleName,
  nickName,
  uniqueID,
  bigNumber,
  anotherBigNumber
});


//-------------------------------------------
// Non-Primitive Types : Object, Array, Function
//-------------------------------------------

// 1. Object

let person = {
    name: "Alice",
    age: 25,
    isStudent: false
    };
console.log(typeof person); // Checking the type of person

// 2. Array

let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // Checking the type of numbers

// 3. Function

function greet() {
    return "Hello, World!";
}
console.log(typeof greet); // Checking the type of greet


//-------------------------------------------
// Summary Table of Non-Primitive Types
//-------------------------------------------

console.table({
    person,
    numbers,
    greet: greet() // Calling the function to show its return value
});



console.log(Number("33"));        // 33
console.log(Number("33abc"));     // NaN
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number("Pratiksha")); // NaN
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN
console.log(Number(""));          // 0

// Notes Conversion Examples

// String to Number
    // "33" -> 33
    // "33abc" -> NaN

// Boolean to Number    
    // true -> 1
    // false -> 0
    
// Null and Undefined to Number
    // null -> 0
    // undefined -> NaN

// Empty String to Number
    // "" -> 0  
    //"Pratiksha" -> NaN

    // strig/Number to Boolean
    // " "=> true
    // "Pratiksha" => true
    // 33 => true
    // 0 => false
    // "" => false
    // null => false
    // undefined => false

