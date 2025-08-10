var color = prompt("enter the color of the traffic light ").toLowerCase()
var red = "red".toLocaleLowerCase()
var yellow = "yellow".toLocaleLowerCase()
var green = "green".toLocaleLowerCase()
if(color===red){
    document.write("must stop")
}else if (yellow===color){
      document.write("ready to move")
}else if (green===color){
      document.write("move now")
}else {
      document.write("invalid color")
}