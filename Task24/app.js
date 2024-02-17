"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
//write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// Tests for equality and inequality with strings
let string1 = "hello";
console.log("Equality test with strings: 'hello' === 'hello'", string1 === "hello"); // true
console.log("Inequality test with strings: 'hello' !== 'hello'", string1 !== string1); // false
// Tests using the lower case function
let text = "Hello World";
console.log("Lowercase test: 'Hello World' to lowercase === 'hello world'", text.toLowerCase() === "hello world"); // true
console.log("Lowercase test: 'Hello World' to lowercase === 'Ohello world'", text.toLowerCase() === "Ohello world"); // fasle
// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("Equality test with numbers: 10 === 10", num1 === 10); // true
console.log("Inequality test with numbers: 10 !== 5", num1 !== num2); // true
console.log("Greater than test: 10 > 5", num1 > num2); // true
console.log("Less than test: 5 < 10", num2 < num1); // true
console.log("Greater than or equal to test: 10 >= 10", num1 >= 10); // true
console.log("Less than or equal to test: 5 <= 10", num2 <= num1); // true
// Tests using "and" and "or" operators
let x = 5;
let y = 10;
console.log("And operator test: (5 < 10) && (10 > 5)", (x = y) && (y > x)); // false
console.log("Or operator test: (5 < 10) || (10 < 5)", (x < y) || (y < x)); // true
// Test whether an item is in an array
let fruits = ["apple", "banana", "orange", "grape"];
console.log("Is 'apple' in the array?", fruits.includes("apple")); // true
// Test whether an item is not in an array
console.log("Is 'grape' not in the array?", !fruits.includes("grape")); // fasle
