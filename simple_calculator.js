var a = prompt("enter number 1"); 
var b = prompt("enter number 2");  

if ( a == "" || b == ""){
    alert("value can't be empty");
}
else if((c = isNaN(a)) || (d = isNaN(b))) { 
    
    alert("enter only number");
}
else {

a = parseFloat(a); 
b = parseFloat(b);

var operator = prompt("enter the desired operation sign"); 

switch(operator){
    
    case "+" : 
    console.log(`result is ${a+b}`); 
    break; 
    
    case "-" :
    console.log(`result is ${a-b}`); 
    break; 

    case "*" : 
    console.log(`result is ${a*b}`); 
    break; 

    case "/": 
    console.log(`result is ${a/b}`); 
    break; 

    default : 
    console.log("enter '+' or '-' or '*' or '/' sign");
    break;
} 
} 