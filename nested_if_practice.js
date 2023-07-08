var a = prompt("enter the first number"); 
var b = prompt("enter the second number"); 
var c = prompt("enter the third number"); 

var a = parseFloat(a).toFixed(3); 
var b = parseFloat(b).toFixed(3); 
var c = parseFloat(c).toFixed(3); 

if ((a != b) && (a > b)){
    if((a != c) && (a > c)){
        console.log("a is the largest")
    } 
    else{
        console.log("c is the largest");
    }
} 
else{
    if(b != c &&  b > c){
        console.log("b is the largest")
    }else{
        console.log("c is the largest");
    }
}