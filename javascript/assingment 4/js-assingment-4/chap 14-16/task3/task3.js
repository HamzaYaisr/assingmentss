var colors = ["Red", "Green", "Blue"];
document.write("<b>Initial colors:</b> " + colors.join(", ") + "<br>");

// a. Add color to beginning
var colorToAddStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddStart);
document.write("<b>After adding to beginning:</b> " + colors.join(", ") + "<br>");

// b. Add color to end
var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
document.write("<b>After adding to end:</b> " + colors.join(", ") + "<br>");

// c. Add two more colors to beginning
colors.unshift("Purple", "Yellow");
document.write("<b>After adding two colors to beginning:</b> " + colors.join(", ") + "<br>");

// d. Delete first color
colors.shift();
document.write("<b>After deleting first color:</b> " + colors.join(", ") + "<br>");

// e. Delete last color
colors.pop();
document.write("<b>After deleting last color:</b> " + colors.join(", ") + "<br>");

// f. Add color at user-defined index
var addIndex = prompt("At which index do you want to add a color?");
var addColor = prompt("Enter the color name to add:");
colors.splice(Number(addIndex), 0, addColor);
document.write("<b>After adding color at index " + addIndex + ":</b> " + colors.join(", ") + "<br>");

// g. Delete color(s) at user-defined index
var delIndex = prompt("At which index do you want to delete color(s)?");
var delCount = prompt("How many colors do you want to delete?");
colors.splice(Number(delIndex), Number(delCount));
document.write("<b>After deleting " + delCount + " color(s) from index " + delIndex + ":</b> " + colors.join(", ") + "<br>");