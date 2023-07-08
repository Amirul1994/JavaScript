// Write a program to check whether a number is negative, positive or zero. 

var b = prompt("Enter the number:"); 
var a = parseFloat(b).toFixed(5);

if (a > 0){
    console.log("the number is positive"); 
}else if(a < 0){
    console.log("the number is negative");
}else if ( a == 0) {
    console.log("the number is zero"); 
}else {
    console.log("empty field");
}