var char = prompt("Enter a character:");

if (char.length === 1) {
    var code = char.charCodeAt(0);

    if (code >= 48 && code <= 57) {
        document.write("The input is a number.");
    } else if (code >= 65 && code <= 90) {
        document.write("The input is an uppercase letter.");
    } else if (code >= 97 && code <= 122) {
        document.write("The input is a lowercase letter.");
    } else {
        document.write("The input is not a number or letter.");
    }
} else {
    document.write("Please enter a single character.");
}