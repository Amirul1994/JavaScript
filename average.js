//BeeCrowd 1005 (beecrowd.com.br)
// Read two floating points' values of double precision A and B, corresponding to two student's grades. After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5. Each grade can be from zero to ten, always with one digit after the decimal point. Don’t forget to print the end of line after the result, otherwise you will receive “Presentation Error”. Don’t forget the space before and after the equal sign.


var a = prompt("Enter a:"); 
var b = prompt("Enter b:"); 

var c = parseFloat(a); 
var d = parseFloat(b); 

var avg = ((c*3.5)+(d*7.5))/(3.5+7.5); 
console.log("MEDIA=", avg.toPrecision(6)); 