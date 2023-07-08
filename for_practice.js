for ( var a = 1; a <= 100; a++){
    console.log(a); 
} 

console.log(""); 

for( i = 97; i <= 122; i++){
    console.log(String.fromCharCode(i));
}  

console.log("");

// summation from 1 to 10

var sum = 0; 

for( b = 1; b <= 10; b++){
  
    sum = sum + b; 
    
} 
console.log(sum);  


console.log(""); 

// even number 

for( c = 1; c<=100; c++){
    if ( c % 2 == 0){
        console.log(c);
    }
}  

console.log(""); 

// product of 1 to 10 

var product = 1; 

for( d = 1; d <= 10; d++){
    product = product * d; 
} 
console.log(product);      


console.log("") 

// sum of even numbers 

var even_sum = 0; 

for ( e = 2; e <= 10; e+=2){

    even_sum = even_sum + e;  
    
} 
console.log(even_sum);  

console.log(""); 

// even summation within given limit
/*
var even_sum2 = 0; 

var lower_limit = prompt("enter lower limit"); 
var upper_limit = prompt("enter upper limit"); 

if (lower_limit%2 != 0 || upper_limit%2 != 0){
    alert("enter even number");
}else{

lower_limit = parseInt(lower_limit);
upper_limit = parseInt(upper_limit);


for ( f = lower_limit; f <= upper_limit; f+=2){
    even_sum2 = even_sum2 + f;
} 
}
console.log(even_sum2);   */  


// multiplication table  

var g = prompt("Enter a digit or number");
if (h = isNaN(g)){
    window.alert("don't enter letter or word or special character");
} 
else{
g = parseInt(g);

for ( h = 1; h <= 10; h++){
    //var multi_table = g * h; 
    //console.log(g*h,multi_table); 
    console.log(`multiplication of ${g}*${h} = ${g*h}`);
} 
}