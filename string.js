console.log("Hello World"); 
console.log('hello World'); 
console.log("hello '' '''''''World"); 
console.log('hello """""""" world');  

var x = " Hello \" World"; 
console.log(x); 

var x = 'Hello \' World'; 
console.log(x);  

var x = "hello \ world"; 
console.log(x); 

var x = "hello \\ world"; 
console.log(x); 

var x = "hello \t world"; 
console.log(x); 

var x = "hello \t\t world"; 
console.log(x);  

var x = "hello \n world"; 
console.log(x); 

var x = "hello \nworld"; 
console.log(x); 

var x = "hello"; 
var y = " world"; 
var z = x + y; 
console.log(z); 

// for finding property there is no need ()
// for method () is needed
z = z.length; 
console.log(z); 

// \n will be considered as one character
var x = "hello \nWorld!" 
z = x.length; 
console.log(z);  

var z = "bohubrihi".length; 
console.log(z);    

var x = "Bohubrihi"; 
// index means position within the string 
// it starts from 0 
console.log(x[0]); 
console.log(x[1]); 
console.log(x[2]); 
console.log(x[3]); 
console.log(x[15]);
console.log(x[8]); 

/* point to be noted:
method doesn't change the value of the variable on 
which it applied, it keeps the original value of the 
variable and returns the changed value. 
So, to get the changed value, keep the changed value in a string */

var x = "Bohubrihi"; 
var z = x.toUpperCase(); 
console.log(x); 
console.log(z); 

var z = x.toLowerCase(); 
console.log(z); 

var y = "  Bohubrihi "; 
console.log(y); 

// trim will remove the spaces
z = y.trim(); 
console.log(z);  

var d = "Bohubrihi"; 
var e = d.slice(); 
console.log(e);  

// slice() will cut a portion of the string
// slice(1, 4) 
// 1 is the starting index 
// 4 until which will be cut 

var d = "Bohubrihi";
var e = d.slice(1, 4); 
console.log(e); 

var e = d.slice(1,5); 
console.log(e);  

var d = "Bohubrihi"; // brih 

// slice(-5, -1) 
// the index count will start from right 
// so i is in -1 position 
// h is in -1 position 
// b is in -5 position 
// so it will print from b until h

var e = d.slice(-5, -1); 
console.log(e);  

var d = "Bohubrihi";
var e = d.slice(1);
console.log(e); 

var d = "Bohubrihi";

// substr(3,2)
// 3 is the position from which it will start cuttting 
// 2 is the number of chracters it will cut

var e = d.substr(3,2); 
console.log(e); 

var d = "Bohubrihi"; 
var e = d.substr(3,4); 
console.log(e); 

var d = "Bohubrihi";
var e = d.substr(3); 
console.log(e); 

var d = "Bohubrihi";
var e = d.replace("br", "em"); 
console.log(e); 

var d = "Bohubrihi"; 

// will replace the first i with hello

var e = d.replace("i", "hello"); 
console.log(e);  

var d = "Bohubrihi";
var x = "ABC"; 

// concat() : concatation

var y = x.concat(d, "EFG", "123"); 
console.log(y);  

//https://www.w3schools.com/jsref/jsref_obj_string.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 