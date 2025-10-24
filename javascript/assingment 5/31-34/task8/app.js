
    var customerName = "Muhammad Hamza";
    var currentMonth = "September";
    var numberOfUnits = prompt("enter your unites of this months");
    var chargesPerUnit = 16;
    var latePaymentSurcharge = 350;

   
    var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
    var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

   
    document.write("<b>Customer Name:</b> " + customerName + "<br>");
    document.write("<b>Month:</b> " + currentMonth + "<br>");
    document.write("<b>Number of units:</b> " + numberOfUnits + "<br>");
    document.write("<b>Charges per unit:</b> " + chargesPerUnit.toFixed(2) + "<br><br>");

    document.write("<b>Net Amount Payable (within Due Date):</b> " + netAmountPayable + "<br>");
    document.write("<b>Late Payment Surcharge:</b> " + latePaymentSurcharge.toFixed(2) + "<br>");
    document.write("<b>Gross Amount Payable (after Due Date):</b> " + grossAmountPayable + "<br>");