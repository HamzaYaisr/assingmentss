var time = prompt("Enter time in 24-hour format (e.g., 1900):");
time = Number(time);

if (time >= 0 && time < 1200) {
    document.write("Good morning!");
} else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    document.write("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    document.write("Good night!");
} else {
    document.write("Invalid time entered.");
}