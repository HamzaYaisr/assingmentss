var num = parseInt(prompt("Enter number"));
var multiple = parseInt(prompt("Multiples"));
for (var i = 1; i <= multiple; i++) {
    document.write("<br> " + num * i);
}