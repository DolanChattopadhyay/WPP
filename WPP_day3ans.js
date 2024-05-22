/// Import the readline module
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random integer between 1 and 10 (inclusive)
const num = Math.ceil(Math.random() * 10);

// Prompt the user to guess a number between 1 and 10 (inclusive)
rl.question('Guess the number between 1 and 10 inclusive: ', (gnum) => {
    // Check if the guessed number matches the generated random number
    if (parseInt(gnum) == num) {
        // Log a message if the guessed number matches the random number
        console.log('Good Work');
    } else {
        // Log a message if the guessed number does not match, and also provide the correct number
        console.log('Not matched, the number was ' + num);
    }

    // Close the readline interface
    rl.close();
});
