str1 = prompt(""); 

var str2; 
sum = 0; 

for( let i = str1.length - 1; i >= 0; i--){
       let value = str1[i]; 
       sum = sum + value; 
       
} 
console.log(sum); 
str2 = sum.slice(1); 

console.log(str2);