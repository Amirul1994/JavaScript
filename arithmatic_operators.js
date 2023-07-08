var a = 20; 
var b = 6; 

var c = a +b; 

console.log(c); 

console.log( a - b ); 

console.log( b - a ); 

console.log( a * b ); 

console.log( a / b ); 

console.log( b / a );  

console.log( a % b ); 

var a = 3; 
var b = 2; 

console.log( a ** b); 

console.log( 2 ** 3 );

// a++ = a+1
var a = 10; 
a++;
console.log(a);  

var a = 5; 
var b = 7; 
a++; 
++b; 
console.log(a); 
console.log(b);   

var a = 5; 
var b = 7; 

var c, d; 

// for c = a++, first store the value of c into a, then increment the value of a by 1 
c = a++; 

// for d = ++b, first increment the value of b by 1, then store the value into d
d = ++b; 

console.log(c); 
console.log(a);
console.log(d); 
console.log(b);  

var a = 5; 
var b = 7; 

c = a--; 
d = --b; 

console.log(c); 
console.log(a); 
console.log(d); 
console.log(b);     

d = 5+3-6*5/5; 
console.log(d); 

// if there is exponent (**), it will take precedence 
d = 5+3-6*5/5**2; 
console.log(d); 

d = (5+1)-6*5/2**4; 
console.log(d); 