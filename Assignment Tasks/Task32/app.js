"use strict";
//CChecking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will 
//need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current users
let currentUsers = ["Alice", "Bob", "Charlie", "David", "Eva"];
// List of new users
let newUsers = ["Eva", "Frank", "Gina", "John", "Alice"];
// Convert all usernames in currentUsers to lowercase for case-insensitive comparison
let currentUsersLowercase = currentUsers.map(user => user.toLowerCase());
// Loop through new users to check for uniqueness
for (let newUser of newUsers) {
    // Convert newUser to lowercase for case-insensitive comparison
    let newUserLowercase = newUser.toLowerCase();
    // Check if newUserLowercase exists in currentUsersLowercase
    if (currentUsersLowercase.includes(newUserLowercase)) {
        console.log(`Sorry, the username '${newUser}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}
