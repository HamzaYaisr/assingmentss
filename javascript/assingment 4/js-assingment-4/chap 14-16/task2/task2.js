var studentNames = ["Ali", "ahmed", "hamza"];
var scores = [420, 380, 450];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write(
        "Score of " + studentNames[i] + " is " + scores[i] +
        ". Percentage: " + percentage.toFixed(2) + "%<br>"
    );
}