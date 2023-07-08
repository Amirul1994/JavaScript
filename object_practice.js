var flat = { size: 1450, bedroom: 3, veranda: 3, location:"Shewrapara"}; 
console.log(flat);   

var myself = {name:"amirul", age: 30, address: "Bangladesh"}; 
console.log(myself);   
console.log(myself["address"]); 

var price={}; 
console.log(price);   

var family = {member: 3, brother: 1, sister: 1, father: "dead", mother: "alive"};   

family["hometown"] = "Noakhali"; 
console.log(family); 

family["earning"] = "unknown"; 
family["present_address"] = "Dhaka"; 

console.log(family); 

family.condition = "good"; 
console.log(family);  

family.hobby = ""; 
console.log(family);  

delete family.hobby; 
console.log(family);   

delete family.earning;  
console.log(family);   

var learning = {programming : "yes", security : "no", number:2, attempt:"ongoing"};  

console.log(learning["attempt"]);  
console.log(learning["number"]); 
console.log(learning["security"]); 
console.log(learning["programming"]);  

console.log((learning["time"] = "one year")); 
console.log(learning); 

learning["present"] = "JS"; 
console.log(learning);   

learning.module = 3; 
console.log(learning);  

delete learning.module; 
delete learning.security; 
delete learning.number;  


var student = {}; 
console.log(student); 

student["name"] = "amirul"; 
student["age"] = 30; 
student.location = "Shewrapara"; 

student.district = "Noakhali"; 

console.log(student); 

student.location = "Dhaka";

delete student.district; 

console.log(student); 