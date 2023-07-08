// primitive types 
// number, string, boolean 

// deals with value 
// different address
let a = 7; 
let b = a;  // a is not stored to b, value of a is stored to b

a = 45; 
console.log(b);   

// reference types 
// array, object 
// same address 
let numbers = [1, 2, 3]; 
let newNumbers = numbers; 
console.log(newNumbers);  

numbers[1] = 500; 
console.log(numbers); 
console.log(newNumbers); 