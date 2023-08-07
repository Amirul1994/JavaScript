// regular expression - is a pattern matching technique 
// can check a string is following a particular pattern or not 
// e.g : valid email check, password strength check  

let re; 
let str; 

//  '//' is used to indicate regular expression 
// the string inside '//' is the regular expression
re = /hello/;  
re2 = /Hello/; 


console.log(re); 

// source will only show the regular expression 
console.log(re.source);  

str = "Hello World"; 

// exec() - will return an array if matches, return null if not 
let result = re.exec(str); 
let result2 = re2.exec(str); 

console.log(result);
console.log(result2);  

// 'i' will let the pattern matching works regardless of 
// case sensitivity
let re3 = /hello/i;   
let result3 = re3.exec(str); 

console.log(result3); 

let str2 = "HelLo World"; 
let result4 = re3.exec(str2); 

console.log(result4);   

console.log("");

let str3 = "Again Hello World"; 
let re4 = /hello/i;   

let result5 = re4.exec(str3); 
console.log(result5);   

console.log("");

let str5 = "Hell World"; 
let re5 = /hello/i;   

// pattern has to match within '//' (expression)
let result6 = re5.exec(str5); 
console.log(result6);  

console.log(""); 

let str6 = "sdsHellosds World"; 
let re6 = /hello/i; 

// this pattern matching will work whatever position the 
// pattern is found out

let result7 = re6.exec(str6); 
console.log(result7); 

console.log(""); 

let str7 = "Again Hello World Hello"; 
let re7 = /hello/i; 

// if the same pattern is found more than once 
// only the first pattern will be shown
let result8 = re7.exec(str7); 
console.log(result8);  

console.log("");
// test() - if matches true, otherwise false  

let str8 = "Again Hello World Hello";  
let re8 = /hello/i; 

let result9 = re8.test(str8); 
console.log(result9);  

let str9 = "World"; 
let re9 = /hello/i; 

let result10 = re9.test(str9); 
console.log(result10);  

console.log("");  

// match() - returns an array or null 
// first the string, then the expression 

let str10 = "World"; 
let re10 = /hello/i; 

let result11 = str10.match(re10); 
console.log(result11); 

console.log(""); 

let str11 = "Again Hello World Hello";  
let re11 = /hello/i; 

let result12 = str11.match(re11); 
console.log(result12);   

console.log(""); 

// search() - returns index of the first match or -1  

let result13 = str11.search(re11); 
console.log(result13); 

console.log(""); 

let str12 = "World"; 
let re12 = /hello/i; 

let result14 = str12.search(re12);
console.log(result14); 

console.log(""); 

// replace() - will replace the first match and returns string 

let str13 = "Again Hello World Hello"; 
let re13 = /hello/i; 
let newstr = str13.replace(re13, "Hi"); 
console.log(re13.source); 
console.log(newstr);