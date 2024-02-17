"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger 
//dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
let names = ["Shahzaib", "Shaahrozz", "Zohaib", "Bilal", "Sohaib"];
let messages = ["Please join me for Dinner Tonight", "Please come over for DInner Tonight", "There is a Dinner party tonight, please come", "Dinner at my house, please come", "please come to my house for lovely Dinner"];
names.push("Shehzad");
messages.push("please come to my house for Dinner tonight"); // could not find append() for type Script, alternative is push() same work
console.log("Message to ", names[0], ": ", messages[0]);
console.log("Message to ", names[1], ": ", messages[1]);
console.log("Message to ", names[2], ": ", messages[2]);
console.log("Message to ", names[3], ": ", messages[3]);
console.log("Message to ", names[4], ": ", messages[4]);
console.log("Message to ", names[5], ": ", messages[5]);
console.log("I have now got bigger table, so more guest are now being invited");
