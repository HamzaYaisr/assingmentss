   var ramadanStart = new Date(2025, 2, 1);

    var today = new Date();

  
    var diffMs = today.getTime() - ramadanStart.getTime();

    var daysSince = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    alert("Days since 1st Ramadan (March 1, 2025): " + daysSince);