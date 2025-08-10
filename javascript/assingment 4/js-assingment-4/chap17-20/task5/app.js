var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

document.write("The largest number is " + largest);