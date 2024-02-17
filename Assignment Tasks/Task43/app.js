"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ 
//names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() 
//with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
let originalMagicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
let greatMagicians = make_great([...originalMagicians]);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
