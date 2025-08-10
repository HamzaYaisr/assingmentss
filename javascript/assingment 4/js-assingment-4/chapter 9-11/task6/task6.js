var num = "7"
var guess = prompt("enter your guess")
var close = num-1
if (guess == num) {
    document.write("you won")
}else if ( guess== close){
    document.write(" you are close ")    
}else{
    document.write("try again")
}