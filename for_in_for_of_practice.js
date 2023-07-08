var a = "my name is amirul"; 
var b = [1, 2, 3, 4, 5, 8]; 
var c ={ name: "amirul", age: 30, gender: "male", location: "dhaka" }; 

for (let d in a ){
    console.log(d); 
} 

console.log(""); 

for (var d in a){
    console.log(`${d} = ${a[d]}`);
} 

console.log(""); 

for ( var d of a){
    console.log(d); 
}  

console.log(""); 

for (var d in b){
    console.log(d);
} 

console.log(""); 

for ( var d in b){
    console.log(`${d} = ${b[d]}`); 
}    

console.log("");

var c ={ name: "amirul", age: 30, gender: "male", location: "dhaka" }; 

for ( let d in c ){
    console.log(d);
} 

console.log("");  

for ( let d in c){
    console.log(`${d} = ${c[d]}`);
} 


console.log('');

for ( let d in c ){
    console.log(`${d} = ${c.d}`);
}