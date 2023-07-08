var arr = [1,2,3];  

var student = {name: "nazrul", age: 25, hometown:"Dhaka"};  
console.log(student);  

console.log(arr[0]); 

console.log(student["name"]); 
console.log(student["age"]); 
console.log(student["hometown"]);  

console.log(student.name); 
console.log(student.age); 
console.log(student.hometown);   

var student = {name: "nazrul", age : 25, hometown: "Dhaka"}; 

// appending new property & value

student["occupation"] = "Student"; 
console.log(student);   

student.district = "Kurigram"; 
console.log(student);  

delete student.district; 
console.log(student);  

student = {};  
console.log(student);  

student.name = "Asif"; 
student.age  = 27; 

console.log(student); 