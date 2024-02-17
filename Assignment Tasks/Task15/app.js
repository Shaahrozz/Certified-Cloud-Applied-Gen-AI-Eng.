"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let names = ["Shaahrozz", "Bilal", "Sohaib",];
let messages = ["Please join me for Dinner Tonight", "Please come over for DInner Tonight", "There is a Dinner party tonight, please come"];
names[2] = "Shehzad";
messages[2] = "please come to my house for Dinner tonight";
console.log("Message to ", names[0], ": ", messages[0]);
console.log("Message to ", names[1], ": ", messages[1]);
console.log("Message to ", names[2], ": ", messages[2]);
console.log("Sohaib is busy so he could not join us for Dinner Tonight, but Shehzad is here");
