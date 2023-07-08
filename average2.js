var A = prompt("Enter A:"); 
var B = prompt("Enter B:"); 
var C = prompt("Enter C:");  

var d = parseFloat(A); 
var e = parseFloat(B); 
var f = parseFloat(C); 

var avg = ((d*2)+(e*3)+(f*5))/(2+3+5); 
console.log("MEDIA=", avg.toPrecision(2));