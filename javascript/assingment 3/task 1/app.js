var text = "muhammad hamza"
var toFound = "z"
var startingIndex = "0"
for (startingIndex; startingIndex < text.length; startingIndex++) {
    if (toFound == text[startingIndex]) {
        console.log(startingIndex);
        break

    }
}