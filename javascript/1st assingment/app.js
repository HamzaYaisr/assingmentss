// var fullName = "Huzaifa Khan"
// var num = 123456
// var isInvited = false

// alert(fullName)
// alert( typeof(fullName) )
// alert( typeof(num) )
// alert ( typeof (isInvited)  )

// var firstName = "Huzaifa"
// var lastName = "Khan"

// firstName // camelCase
// FirstName // PascalCase
// first_name // snake_case

// document.write(firstName, " ", lastName)
// Concatination: adding a string to another string
// document.write(firstName + " " + lastName + " Hello, Welcome to Pakistan") 

// document.write("<i>" + firstName + " " + lastName + "</i>")

// var num1 = "4"
// var num2 = 6

// document.write(num1 - num2 + num3)
//  "4" + 6 // 46
//  "4" - "6"  //-2
//  "4" * 6 // 24
//  "4" / 6 // 0.66

// NaN ==> Not a number ==> ya tu appke pass 1 variable me koi masla hai, ya phir dono variable me koi masla hai

// agar string me sirf number ho aur mathematics apply karni ho (rather than +) tu uss string ko number consider kiya jaega: eg: "4" is equal to 4

// document.write(num1 + num2)
// +4 + 6 // 10



// var fullName = prompt("Enter your Full Name:")


// document.write("<h1>Full Name: " + fullName + "</h1>")
// alert("You entered: " + fullName)

// var student1 = prompt("First Student Name: ")

// document.write( typeof(student1) )
// typeof prompt is always a string

// var student2 = prompt("Second Student Name: ")
// var student3 = prompt("Third Student Name: ")

// document.write("<p>First Student: " + student1 + "</br>Second Student: " + student2 + "</br>Third Student: " + student3 + "</p>" )


var num1 = +prompt("Enter 1st Number: ")
var num2 = +prompt("Enter 2nd Number: ")
var addition = num1 + num2
var multiply = num1 * num2
var divide = num1 / num2
var subtract = num1 - num2
document.write("<table border='2px' cellspacing='10'><thead><tr><td>" + "number1" + "</td><td>" + "operation" + "</td><td>" + "number2" + "</td><td>" + "answer" + "</tr></thead><tbody><tr><td>" + num1 + "</td><td>" + "+" + "</td><td>" + num2 + "</td><td>" + addition + "</tr><tr><td>" + num1 + "</td><td>" + "-" + "</td><td>" + num2 + "</td><td>" + subtract + "</tr><tr><td>" + num1 + "</td><td>" + "*" + "</td><td>" + num2 + "</td><td>" + multiply + "</tr><tr><td>" + num1 + "</td><td>" + "/" + "</td><td>" + num2 + "</td><td>" + divide + "</tr></tbody></table>")