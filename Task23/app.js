"use strict";
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results 
//of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaru';
// Test 1: Check if car is 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// Test 2: Check if car is 'honda'
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False
// Test 3: Check if car is not 'toyota'
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // True
// Test 4: Check if car starts with 's'
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith('s')); // True
// Test 5: Check if car ends with 'u'
console.log("Does car end with 'u'? I predict True.");
console.log(car.endsWith('u')); // True
// Test 6: Check if car includes 'baru'
console.log("Does car include 'baru'? I predict True.");
console.log(car.includes('baru')); // True
// Test 7: Check if car is a string
console.log("Is car a string? I predict True.");
console.log(typeof car === 'string'); // True
// Test 8: Check if car is not undefined
console.log("Is car not undefined? I predict True.");
console.log(car !== undefined); // True
// Test 9: Check if car is null
console.log("Is car null? I predict False.");
console.log(car === null); // False
// Test 10: Check if car has a length greater than 0
console.log("Does car have a length greater than 0? I predict True.");
console.log(car.length > 0); // True
