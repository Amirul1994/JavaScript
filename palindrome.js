num1 = prompt("enter the number"); 
if (num3 = isNaN(num1)){
    console.log("type number only");
}
else{
var num2; 
sum = 0; 

for( let i = num1.length - 1; i >= 0; i--){
       let value = num1[i]; 
       sum = sum + value; 
       
} 
console.log(sum); 
num2 = sum.slice(1); 

if (num1 == num2){
    console.log("the number is palindrome");
}else{
    console.log("the number is not palindrome");
} 
} 