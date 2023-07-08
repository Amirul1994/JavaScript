var num1 = prompt("enter number 1"); 
var num2 = prompt("enter number 2"); 

num1 = parseInt(num1); 
num2 = parseInt(num2);

if ( num2 <= num1){
    alert("number 1 can't be greater than or equal number 2")
}
else{

var num3 = prompt("enter number"); 
var lcm;

if ( num3 > num2){
    alert("number 3 can't be greater than number 2");
}
else{

if ( num1 % num3 != 0 && num2 % num3 != 0 ){
    lcm = num1 * num2; 
} 
else{
    for ( lcm = num2;    ; lcm = lcm + num2 ){
        if (lcm % num1 == 0 && lcm % num2 == 0){
            break; 
        }
    }
} 
} 
} 
console.log(lcm);