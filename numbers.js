var x = 3.1; 
console.log (x); 

var x = 34; 
console.log(x); 

// ex = 10**x  
x = 123e5; 
console.log (x);   

// e: exponent
// e-x = 10**-x; 
x = 123e-5; 
console.log(x);  

// in computer the value of interger is stored as 64 bit value   

console.log( "34" + "45" ); 
console.log( 34 + "45" ); 
console.log( "45" + 34 );  
console.log( 34 + 45 + "45" );  

console.log ( "The result: " + 34 + 45 );  

console.log ( "25" - "5" ); 
console.log ( "25" * "5"); 
console.log ( "25" / "5" ); 
console.log ( "25" - 5 ); 
console.log ( "25" * 5 ); 
console.log("25"%"5");  

console.log(25/0); 
var y = (25/0); 
console.log(y);  

var y = Infinity; 

// hexadecimal 
var x = 0xBB; 
console.log(x); 

// toString() : a method which converts number into string 
var x = 187; 
var y = x.toString(); 
console.log(y);  

var x = 3.1416; 
var y = x.toString(); 
console.log(y); 

// toString() can change the base and it will remain in string
// the following example will change to base 2 (binary)
// by default the base is 10 (decimal) 

var x = 187; 
var y = x.toString(2); 
console.log(y); 

var y = x.toString(8); 
console.log(y); 

var y = x.toString(16); 
console.log(y); 

// toPrecision : will decide how many digits to keep after '.'  
// store the value as string 
var x = 3.1416; 
var y = x.toPrecision(); 
console.log(y); 

y = x.toPrecision(2); 
console.log(y); 

y = x.toPrecision(3); 
console.log(y); 

y = x.toPrecision(5); 
console.log(y); 

y = x.toPrecision(10); 
console.log(y);  

var x = 187; 
var y = x.toString(); 
console.log(y); 

console.log(parseInt(y));  

var z = parseInt(y); 
console.log(y);  

var y = "3.1416"; 
var z = parseInt(y);
console.log(z);  

var z = parseFloat(y); 
console.log(z);  

var x = 3.1416; 
var x = x.toString(); 
console.log(x); 

var x = 3.1416; 
x = parseFloat(x.toString()); 
console.log(x);  

// isNaN() : a method to determine the variable is number or not 
// if the variable is number it will return false 
// if the variable is not a number it will return true 
var x = "amirul"; 
console.log(isNaN(x));  

var x = 188; 
console.log(isNaN(x));  

var x = "134"; 
console.log(isNaN(x));  

var x = "134asdasdsa"; 
console.log(isNaN(x));  

//https://www.w3schools.com/jsref/jsref_obj_number.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number