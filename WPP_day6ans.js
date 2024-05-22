function checkMultiples(number) {
    if (number <= 0) {
        console.log("Please enter a positive number.");
    } else if (number % 3 === 0 && number % 7 === 0) {
        console.log(number + " is a multiple of both 3 and 7.");
    } else if (number % 3 === 0) {
        console.log(number + " is a multiple of 3.");
    } else if (number % 7 === 0) {
        console.log(number + " is a multiple of 7.");
    } else {
        console.log(number + " is not a multiple of 3 or 7.");
    }
}

// Test cases
checkMultiples(9);  // Output: 9 is a multiple of 3.
checkMultiples(14); // Output: 14 is a multiple of 7.
checkMultiples(21); // Output: 21 is a multiple of both 3 and 7.
checkMultiples(8);  // Output: 8 is not a multiple of 3 or 7.
checkMultiples(5);  // Output: 5 is not a multiple of 3 or 7.
