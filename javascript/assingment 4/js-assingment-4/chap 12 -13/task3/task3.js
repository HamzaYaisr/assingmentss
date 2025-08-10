var char = prompt("Enter a single character:");

function isVowel(c) {
    var vowels = "aeiouAEIOU";
    return vowels.indexOf(c) !== -1;
}

if (char.length === 1) {
    document.write(isVowel(char));
} else {
    document.write("Please enter a single character.");
}
