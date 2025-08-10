var saudiriyal = +prompt("Enter the amount of Saudi Riyal: ");
var usDollar = +prompt("Enter the amount of US Dollar: ");
var usDollartopkr = 285.75;
var saudiriyaltopkr = 76.50;
var totalusdpkr = usDollar * usDollartopkr
var toralsaudiriyalpkr = saudiriyal * saudiriyaltopkr
var totalpkr = totalusdpkr + toralsaudiriyalpkr;
document.write("The value of 1 Saudi Riyal in Pakistani Rupees is: " + saudiriyaltopkr + "<br> The total amount of saudiriyal in pkr is " + toralsaudiriyalpkr + "<br>" + "The value of 1 US Dollar in Pakistani Rupees is: " + usDollartopkr + "<br>" + "The total amout of usd in pkr is "+ totalusdpkr + "<br>"  + "The total amount in Pakistani Rupees is: " + totalpkr);