let re; 
let str;  

// postal code 
// 4700, 4000 

re = /^[0-9]{4}$/;   
str = "4000"; 

// phone number 

// 01717888888, +8801717888888, 8801717888888 

str = "01717888888"; 
str = "8801717888888"; 
str = "+8801717888888"; 

re = /^(\+)?(88)?01[0-9]{9}$/

// email address 
// bohubrihi8.learn@edu.com.bd 

str = "bohubrihi8.learn@edu.com.bd"; 

re = /^([a-zA-z0-9]\.?)+[^\.]@([a-zA-z0-9]\.?)+[^\.]$/;

console.log(re.test(str));