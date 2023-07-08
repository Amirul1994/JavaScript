// Write a program to find maximum between two numbers. 
/*
var num1 = 20; 
var num2 = 30; 

if (num1 > num2){
    console.log("number 1 is maximum"); 
}else{
    console.log("number 2 is maximum"); 
}  */

// Write a program to find maximum between three numbers.  

var num1 = parseFloat(prompt("value of number 1 ")).toFixed(3);
var num2 = parseFloat(prompt("value of number 2 ")).toFixed(3); 
var num3 = parseFloat(prompt("value of number 3 ")).toFixed(3);   

if(num1 <= 0 || num2 <= 0 || num3 <= 0 ){
    console.log("value can't be zero or negative")
}
else if (num1 > num2 && num1 > num3){
    console.log("number 1 is the maximum");
}else if(num2 > num1 &&  num2 > num3){
    console.log("number 2 is the maximum");  
}else if (num3 > num2 && num3 > num1){
    console.log("number 3 is the maximum");
}
else{
    console.log("field can't be empty");
}   