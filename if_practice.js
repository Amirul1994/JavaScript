if(true){
    console.log("true"); 
} 

// can't place condition false if(false) 

var a = true;
if(a = true){
    console.log("true");
}else{
    console.log("false");
}  

var b = false; 
if ( b = true){
    console.log("true"); 
}else{
    console.log("false");
} 

var c = false; 
if( c == true ){
    console.log("true"); 
}else{
    console.log("false");
} 

var d = 175; 

if ( d == 100 ){
    console.log (" d = 100 ");
}else if ( d < 100){
    console.log(" d is less than 100");
}else{
    console.log( " the value of d is mistaken");
}  


var f = prompt("Enter value:"); 

var e = parseFloat(f).toPrecision(4);
console.log(e)

if ( e == 25){
    console.log("the value of e is 25"); 
} else if ( e > 25 && e <= 40){
    console.log("the value of e is in the middle"); 
} else if ( e > 40 && e <= 60){
    console.log("the value of e is higher");
} else if( e > 60 && e < 70){
    console.log("the value of e is very much");
}else if ( e >= 70){
    console.log("the value of e is in the highest state");
}else if ( e >= 0 ){
    console.log(" the value of e is not accurate");
}else{
    console.log("the value of e is invalid"); 
}