"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt("Medium");
// Call the function to make a shirt of any size with a different message
make_shirt("Small", "JavaScript is awesome!");
