/* while(condition){
     code to be executed
}*/   

// don't run the following command as it crashes browser 
// if the condition is just a value(e.g while(1), while(true))
// then the while loop will run for infinite time

/* while(true){
    console.log("hello world");
} 

 while(false){
    console.log("hello world");
} 

while(0){
    comsole.log("hello world");
} 


var i = 1; 

The following loop will also run for infinite times  
as 1 is always less than 5

while(i<=5){
    console.log("hello world");
}*/  


var i = 1; 

while (i <= 5){
    console.log("value of i: "+ i);
    i++; 
} 

console.log("out of the loop");  

/*
var i = 1; 
do{
    console.log("value of i: " +i); 
    i++;
} while(i <= 5); 
*/   

// print 1 to 10  

var i = 1; 

while(i <= 10){
    console.log(i); 
    i++;
}    

console.log(""); 

var i = 1; 

while(i<=10){
    if ( i === 4){
        console.log("value of i is " +i); 
    } 
    console.log(i); 
    i++; 
} 

console.log("");


// sum of 1 to 10  

var i = 1; 
var sum = 0; 

while (i <= 10) {
    sum = sum + i; 
    i++; 
} 

console.log("Result: " + sum);   


console.log(""); 


// product of 1 to 10 

var i = 1; 
var product = 1; 

while ( i <= 10){
    product = product * i; 
    i++; 
} 
console.log("Product: " + product); 