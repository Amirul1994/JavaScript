// for-in string/array/object
// for-of string/array

let name = "I am learning Javascript!"; 
let food = ["Cake", "Chocolate", "Ice Cream"]; 
let person = {
    name: "Shakib Al Hasan", 
    profession: "Cricketer", 
    team: "Bangladesh", 
    age: 33,
}  

// in will save index inside the variable 
// here variable 'x' will save the indexes of the string 'name'
  
for ( var x in name ){
    console.log(x);
}   


for ( var x in name ){
    console.log(`index ${x} and item ${name[x]}`);
}  


// we will get items/values

for(var x of name){
    console.log(x);
}   


for (var y in food) {
    console.log(y);
}  

for (var y in food) {
    console.log(`Index ${y}; and item: ${food[y]}`);
}   

for(var y of food){
    console.log(y);
}  


for (var x in person){
    console.log(x);
} 


for ( var x in person ){
    console.log(`Property: ${x}
    Value: ${person.x}`);
}  

for ( var x in person ){
    console.log(`Property: ${x}
    Value: ${person[x]}`);
}  

console.log(''); 

for ( var x of person){
    console.log(x);
}