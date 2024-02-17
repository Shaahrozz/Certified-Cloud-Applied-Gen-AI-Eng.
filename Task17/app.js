"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for 
//only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("my table has not arrived on time, so i can only invite two persons");
let names = ["Shehzad", "Shaahrozz", "Zohaib", "Bilal", "Sohaib", "shahzaib"];
let messages = ["Please join me for Dinner Tonight", "Please come over for DInner Tonight"];
let mess = "sorry but Dinner is cancelled for tonight, sorry";
console.log("Message to ", names[5], ": ", mess);
names.pop();
console.log("Message to ", names[4], ": ", mess);
names.pop();
console.log("Message to ", names[3], ": ", mess);
names.pop();
console.log("Message to ", names[2], ": ", mess);
names.pop();
console.log("Message to ", names[0], ": ", messages[0]);
console.log("Message to ", names[1], ": ", messages[1]);
names.pop();
names.pop();
console.log(names);
