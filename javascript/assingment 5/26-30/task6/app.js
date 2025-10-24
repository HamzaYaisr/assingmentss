 var secretNumber = 7;

    // Ask user for input
    var userGuess = prompt("Guess a number between 1 and 10:");

    // Convert input to number
    userGuess = Number(userGuess);

    // Check if user guessed correctly
    if (userGuess === secretNumber) {
      alert(" Congratulations! You guessed the secret number " + secretNumber + " correctly!");
    } else {
      alert(" Sorry, the secret number was " + secretNumber + ". Try again!");
    }