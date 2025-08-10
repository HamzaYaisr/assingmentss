var marksobt =  prompt("enter your marks out of 300 ")
var percent = marksobt * 100 / 300

if (percent>100){
    document.write("invalid percentage")
} else if(percent>=80){
    document.write("total marks = 300 <br> marks obtained = " + marksobt +" <br> percentage = " + percent + " <br> Grade = A-one <br> remarks= excellent" )
    
}else if (percent>=70){
        document.write("total marks = 300 <br> marks obtained = " + marksobt +" <br> percentage = " + percent + " <br> Grade = A <br> remarks= good" )

}else if (percent>=60){
        document.write("total marks = 300 <br> marks obtained = " + marksobt +" <br> percentage = " + percent + " <br> Grade = B <br> remarks= you need to improve" )

}else if (percent<60){
        document.write("total marks = 300 <br> marks obtained = " + marksobt +" <br> percentage = " + percent + " <br> Grade = fail <br> remarks= sorry" )

} else if (percent>100){
    document.write("invalid percentage")
}
