var totalmarks = 300;
var marksobtained = +prompt("Enter the marks obtained out of " + totalmarks + ": ");
var percentage = (marksobtained / totalmarks) * 100;
document.write("Total Marks: " + totalmarks + "<br> Marks Obtained: " + marksobtained + "<br> Percentage: " + percentage + "%<br>");