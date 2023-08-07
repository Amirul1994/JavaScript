/* Write a JavaScript program to test whether 
the first character of a string is uppercase or not. */ 

var a = "Amirul"; 
var b = /^([A-Z])/; 
var c = isNaN(a);

if (c){
    
if (b.test(a)) {
    console.log(`${a} starts with uppercase`); 
} else{ 
    console.log(`${a} starts with lowercase`); 
} 
} else{
    console.log("enter word only");
}