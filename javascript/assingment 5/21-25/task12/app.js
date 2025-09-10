 var A = ["cake", "apple pie", "cookie", "chips", "patties"];

    
    var userInput = prompt("Welcome to ABC Bakery! What do you want to order?");

   
    var lowerInput = userInput.toLowerCase();

   
    if (A.includes(lowerInput)) {
      alert(userInput + " is available at index " + A.indexOf(lowerInput) + " in our bakery.");
    } else {
      alert("We are sorry. " + userInput + " is not available in our bakery.");
    }