var a = 30; 
var b = 5; 
var c = 2; 

console.log( a + b ); 
console.log( a - b ); 
console.log( a * b ); 
console.log ( a / b ); 
console.log( b % c ); 
console.log( a ** b );

var a = 12; 
var n = a++; 
console.log(a); 
console.log(n);  

var a = 16; 
var n = ++a; 
console.log(a); 
console.log(n);

var a = 6; 
var m = a; 
var g = a++; 
console.log(a); 
console.log(m);
console.log(g); 

var a = 8; 
var m = a; 
var g = ++a; 
console.log(a); 
console.log(m); 
console.log(g);   

var a = 100; 
a = a + 1; 
document.write(a); 
document.write("<br>");

var a = 50; 
a = a + 5; 
console.log(a); 
a = a - 10; 
console.log(a); 
a = a * 5; 
console.log(a); 
a = a / 5; 
console.log(a);  

var v = 27-7/(3-2)*4**2+1; 
console.log(v);

var v = 30/5+3*4*(2+4-3**2)-6;
console.log(v); 

var a = 3; 
var b = 2; 

c = ( a + b )**2; 

console.log(c); 

j = Math.sqrt(64); 
console.log(j); 
document.write(j);
document.write("<br>");

var a = 2; 
var b = 3; 
var c = 1; 

x = (-b+Math.sqrt(b**2-(4*a*c)))/(2*a);
console.log(x); 

x = (-b-Math.sqrt(b**2-(4*a*c)))/(2*a); 
console.log(x);

// prompt() function will take input as string
var p = prompt("Enter the value of p:"); 
let u = prompt("Enter the value of u:"); 
r = p + u; 
console.log(r); 

 
var aa = prompt("Enter the value of aa"); 
var bb = prompt("Enter the value of bb"); 
// parseInt() function will convert the string into integer
let cc = parseInt(aa); 
let dd = parseInt(bb); 
console.log( cc + dd ); 
console.log( cc - dd ); 
console.log( cc * dd ); 
console.log( cc / dd ); 
console.log( cc % dd );
console.log( cc ** dd);