var person1 = {
    "name" : "imam", 
    "age" : 30, 
    "hometown" : "noakhali", 
    "married" : false
}; 

var person2 = {
    name: "amirul", 
    age: 30, 
    hometown: "noakhali", 
    married: false
} 

console.log(person2); 

// inspite of writing person1 in json format 
// javascript will treat it as an object 
console.log(person1);   

var person1_json = JSON.stringify(person1);
var person1_obj = JSON.parse(person1_json);
console.log(person1_obj);