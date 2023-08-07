var student = {
    name: "amirul",
    age: 30,
    hometown: "noakhali" 
}; 

// JSON.stringify() will convert the object
// into json format  

var student_json = JSON.stringify(student); 
console.log(student_json); 


// JSON.parse will convert json data format to object 

var student_new = JSON.parse(student_json); 
console.log(student_new);