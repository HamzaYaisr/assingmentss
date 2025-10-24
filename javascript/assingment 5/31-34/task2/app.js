 var months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
var today = new Date()
   
    var currentMonth = today.getMonth();

   
    document.write("The current month is " + months[currentMonth]);