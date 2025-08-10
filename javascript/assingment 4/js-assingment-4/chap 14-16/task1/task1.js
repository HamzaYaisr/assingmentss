var qualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD"
];

document.write("<h2>Qualifications in Pakistan:</h2>");
document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");