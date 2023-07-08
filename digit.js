// count number of digits in a number  

//using while loop

var num1 = prompt("enter number"); 
var num2;
var digit = 0; 

if( num2 = isNaN(num1)){
   alert("type number only");
} 
else{
    while ( num1 > 0){
        num1 = Math.floor(num1/10); // Math.floor() is used to round of a number
        console.log(num1); // to check how num1 is changing
        digit++;// if input is 1234 for 123, digit 1; 12,2; 1,3; 0,4
    }
    console.log(digit);
}    


console.log("");


//using for loop

let num1 = prompt("enter the number"); 
let num2; 
let digit = 0; 

if ( num2 = isNaN(num1)){
    alert("enter number only");
}else{
    for ( var i = 0; i < num1.length; i++){
        console.log(digit); // to check how digit is increasing
        digit++; // if input is 1234 for 123, digit 1; 12,2; 1,3; 0,4

}  
console.log(digit);
}