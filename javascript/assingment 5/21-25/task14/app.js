  var text = "The quick brown fox jumps over the lazy dog";

    // Convert to lowercase to make search case-insensitive
    var lowerText = text.toLowerCase();

    // Split into words
    var words = lowerText.split(" ");

    // Count occurrences of "the"
    var count = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i] === "the") {
        count++;
      }
    }

    document.write("Text: " + text + "<br>");
    document.write("There are " + count + " occurrence(s) of the word 'the'.");