var today = new Date();

   
    var day = today.getDay();

   
    if (day === 0 || day === 6) {
      alert("It's Fun day");
    } else {
      alert("It's a working day");
    }