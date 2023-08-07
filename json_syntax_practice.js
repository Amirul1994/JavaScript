var person = {
    name: "amirul", 
    age: 30, 
    occupation: "unemployed"
}; 

var person2 = JSON.stringify(person);
console.log(person2);

var person3 = JSON.parse(person2); 
console.log(person3);  


var flat = {
    size: 1450, 
    location: "shewrapra", 
}; 

var a = JSON.stringify(flat); 
console.log(a); 

var flat2 = JSON.parse(a); 
console.log(flat2);