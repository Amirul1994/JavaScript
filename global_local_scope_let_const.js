/*
var a = 10; 
a = a + 7; 

var a;      // if a variable is declared by var, it can be declared again
            // using let, this can't be done

let b = 6; 
b = b * 67; 
let b;   
*/    


// global scope 

var a = 1; 
let b = 2; 
const c = 3; 
var d = 10;

console.log(`global scope: `, a, b, c); 

function test(){
    var a = 4; 
    let b = 5; 
    const c = 6; 
    var e = 10;
    
    // global scope can be accessed from local scope
    console.log(`functions scope: `, a, b, c, d); 
}  

test();   

//console.log(`global scope: `, a, b, c, e);  

console.log(`global scope: `, a, b, c);   

if (true) {
    var a = 7; 
    let b = 8; 
    const c = 9; 
    console.log(`if scope: `, a, b, c);
}  

// withing 'if' scope, if a variable is declared using var
// the value will be changed the global scope 

console.log(`global scope: `, a, b, c); 


// withing 'for' scope, if a variable is declared using var
// the value will be changed the global scope 

for (var a = 0; a < 10; a++){
    console.log(`loop: `, a);
} 

console.log(`global scope: `, a, b, c);    


for (var a = 0; a < 10; a++){
    console.log(`loop: `, a);
} 

console.log(`global scope: `, a, b, c);