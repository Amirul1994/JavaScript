// equal operator 
console.log( 4 == 4 ); 
console.log( 4 == 6 ); 

var a = 4; 
var b = 5; 

console.log( a == b );  

var c = 7; 
var d = 7; 

console.log( c == d ); 

// in general Javascript doesn't consider data type in equal operator
console.log( 4 == "4" );    

// equal operator inclding data type 
console.log( 4 === "4" ); 

// not equal operator 
console.log( 4 != 5 ); 
console.log( 4 != 4 ); 

// not equal operator including data type 
console.log( 4 !== 4 );  
console.log( 4 !== "4" ); 

// greater than 
console.log( 5 > 4 ); 
console.log( 4 > 5 ); 

// less than 
console.log( 3 < 5 ); 
console.log( 4 < 1 ); 

// greater than equal 
console.log( 5 >= 10 );
console.log( 5 >= 5 ); 
console.log( 5 >= 1 ); 

// less than equal 
console.log( 1 <= 1 ); 
console.log( 1 <= -3 ); 
console.log( 1 <= 10 ); 

var c = ( 5 > 4 ); 
console.log(c); 

var d = ( 1 > 10 ); 
console.log(d);