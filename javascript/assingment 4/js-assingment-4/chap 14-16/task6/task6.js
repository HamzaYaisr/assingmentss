var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');
for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option>' + manufacturers[i] + '</option>');
}
document.write('</select>');