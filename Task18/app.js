"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let locations = ["Paris", "Rome", "Venice", "New york", "China"];
console.log("Orignal Order:", locations);
console.log("Alphabetical Order:", locations.slice().sort());
console.log("Orignal Order:", locations);
console.log("Reverse Alphabetical Order:", locations.slice().sort().reverse());
console.log("Orignal Order:", locations);
let new_loc = locations.reverse();
console.log("Reverse Order:", new_loc);
new_loc = locations.reverse();
console.log(" Again Reverse Order:", new_loc);
new_loc = locations.slice().sort();
console.log("Alphabetical Order:", new_loc);
new_loc = locations.slice().sort().reverse();
console.log(" Reverse Alphabetical Order:", new_loc);
