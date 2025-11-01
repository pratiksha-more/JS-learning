const myVar1="Hello, World!";
console.log(typeof myVar1); // Checking the type of myVar1

let myVar2 = myVar1;
console.log(myVar2); // Output the value of myVar2

myVar2 = "Hello, Universe!";
console.log(myVar1); // Output the value of myVar1 to show it hasn't changed
console.log(myVar2); // Output the value of myVar2 to show it has changed

// Explanation:
// In JavaScript, primitive types (like strings, numbers, booleans, null, undefined, and symbols) are stored by value. 
// This means that when you assign a primitive value to another variable, a copy of that value is made. 
// Therefore, changing the new variable does not affect the original variable.

// Non-Primitive Types Example

// 1. Object
let person = {
    name: "Alice",
    age: 30
};
console.log(typeof person); // Checking the type of person

// 2. Array
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // Checking the type of numbers

// 3. Function
function greet() {
    return "Hello!";
}

console.log(typeof greet); // Checking the type of greet

let anotherPerson = person;
anotherPerson.age = 35;
console.log(person.age);
console.log(anotherPerson.age);

// Explanation:
// In JavaScript, non-primitive types (like objects, arrays, and functions) are stored by reference. 
// This means that when you assign a non-primitive value to another variable, you are copying the reference to the same object in memory. 
// Therefore, changing the new variable will affect the original variable since both variables point to the same object in memory.

//-------------------------------------------
// Summary Table of Non-Primitive Types
//-------------------------------------------

console.table({
    person,
    numbers,
    greet: greet() // Calling the function to show its return value
});     


let userOne={
    name:"Pratiksha",
    RollNo:11
}

let userTwo=userOne;

console.log(userOne);
console.log(userTwo);

userTwo.RollNo=22;

console.log(userOne);
console.log(userTwo);

