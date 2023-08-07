var individual1 = {
    "name": "amirul", 
    "age" : 30, 
}; 

var individual2 = {
    name: "imam", 
    age: 30
}; 

console.log(individual1); 
console.log(individual2);  

let individual3 = JSON.stringify(individual1); 
console.log(individual3); 

let individual4 = JSON.parse(individual3); 
console.log(individual4);