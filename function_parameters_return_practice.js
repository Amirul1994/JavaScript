function num(num2){
    console.log("number 1 is", num2); 
} 

let num1 = "four";
num(num1);  


function num(num4){
    console.log("number 4 is" + " " + num4);
} 

let num3 = "six";  
num(num3); 


function num(a){
    console.log(a); 
} 

num();   

function num2(a = 9){
    console.log(a);
} 

num2();  


function num9(a, b){
    console.log(a, b);
} 

num9(5, 3); 

console.log("");

function new_number(fnum = 18, snum = 16){
    console.log(`first number is ${fnum}
second number is ${snum}`);
} 

let first_number = 67;  
let second_number = 88;  

new_number(first_number, second_number);


console.log(""); 


function addition( first = 4, second = 3){
 console.log(first + second);
} 

let a = 5; 
let b = 6; 
addition(a, b); 

console.log("");

function subtraction(c, d){
console.log(c - d);
}  

subtraction(7,5) 
subtraction(9,5);  

console.log("");

function new_number(){
    var a = 15; 
    var b = 17; 
    return a*b; 
} 

new_number(); 
console.log(new_number);
console.log(new_number());  

console.log(""); 

function newnum( c = 19, d = 19){
    console.log(c/d);
    return c/d;
} 

newnum( c = 87, d = 29 ) 
console.log(newnum()); 

console.log(""); 

function new_num( a = 15, b = 5 ){
    c = a/b;
    console.log(c);
    return c; 
}  

new_num( 35, 7);
console.log(new_num());  

console.log(""); 


function number(a, b){ 
    return a+b;

} 
number(6,2) 
console.log(number());  

console.log(""); 

function addition(a,b){
return a + b;

} 
addition(6,2) 
console.log(addition(6,2));  

console.log("");

function anothernumber(a,b){ 

     a/b; 
     return a/b;

} 

anothernumber(36,4) 
console.log(anothernumber()); 
console.log(anothernumber(36,4));  


console.log("");

function final_attempt(a = 20, b = 5){
        c = a - b; 
        return c;
}  

final_attempt( a = 30, b = 10) 
console.log(final_attempt(a,b));
console.log(final_attempt()); 


console.log(""); 

function NewNumber(c, d){
    
    e = c * d; 
    return e;
} 

console.log(NewNumber(9,5));
console.log(NewNumber(16,7));