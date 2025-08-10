// Get the current count from localStorage, or start at 0 if not set
let visitCount = localStorage.getItem('visitCount');

// Convert to number or start at 0
visitCount = visitCount ? parseInt(visitCount) : 0;

// Increment the count
visitCount++;

// Save the new count back to localStorage
localStorage.setItem('visitCount', visitCount);

// Show the count to the user
alert("You have visited this site " + visitCount + " times.");


// ps made using copilot 