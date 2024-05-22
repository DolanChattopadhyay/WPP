function daysUntilChristmas() {
    // Get the current date
    const today = new Date();
    
    // Set the date for Christmas (December 25 of the current year)
    const currentYear = today.getFullYear();
    const christmasDate = new Date(currentYear, 11, 25); // Months are zero-indexed (0 = January, 11 = December)
    
    // If today's date is after Christmas, set Christmas date to next year
    if (today > christmasDate) {
        christmasDate.setFullYear(currentYear + 1);
    }
    
    // Calculate the difference in milliseconds
    const diffInMs = christmasDate - today;
    
    // Convert milliseconds to days
    const msInOneDay = 24 * 60 * 60 * 1000;
    const daysLeft = Math.ceil(diffInMs / msInOneDay);
    
    return daysLeft;
}

// Call the function and log the result
console.log("Days left until Christmas: " + daysUntilChristmas());