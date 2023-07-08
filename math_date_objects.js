// math object  
/*
let val; 
val = Math.PI; 
val = Math.E;
val = Math.round(3.7); 
val = Math.round(3.1); 
val = Math.ceil(1.1); // ceil will convert the float number into the next interger one 

val = Math.floor(1.9); // floor will convert the float number into the previous integer one 

val = Math.sqrt(81); 
val = Math.abs(-8); 
val = Math.pow(2, 3); // 2 is the base, 3 is the value of power; 2^3 
val = Math.min(1, 8, -8, 1, 0);  
val = Math.max(1, 8, -8, 1, 0); 
val = Math.random(); // random() will provide a dotted decimal number less than 1 

val = Math.random() * 100; // this will provide a random dotted decimal number from 0 to less than 100 

val = Math.random() * 100 + 1; // this will provide a random dotted decimal number from 0 to  100 

val = Math.floor(Math.random() * 100 + 1); 

console.log(val);  
*/

// date object  
let val;
let today = new Date(); // current date will be printed 
let today2 = new Date("01/01/1996");
let birthday = new Date('08-26-1996 11:25:27');
birthday = new Date('August 26 1996'); 
birthday = new Date('8/26/1996'); 




val = today; 
val = today.toString();
val = birthday;
val = today.getMonth(); // javascript counts month from 0
val = today2.getMonth();
val = today.getDate(); 
val = today.getDay(); // in british time day starts from monday
val = today.getFullYear();
val = today.getHours(); 
val = today.getMinutes(); 
val = today.getSeconds(); 
val = today.getMilliseconds(); 
val = today.getTime(); // getTime() will provide the timestamp, it is a value of seconds spent from 01 January, 1970 to till now

birthday.setMonth(2);
birthday.setDate(24); 
birthday.setFullYear(1995); 
birthday.setHours(18);


console.log(val); 
console.log(birthday);