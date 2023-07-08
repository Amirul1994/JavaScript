// () written inside is called parameter/value

function saySomething(param1) {
    console.log(`Hello ${ param1 }`); 
} 

saySomething("Bohubrihi"); 

// when the function is called if something is 
// written inside () [e.g saySomething("Bohubrihi")], 
// it won't be shown 
// to receive it something is needed 
// which is called parameter  

// when the function saySomething("Bohubrihi") is called  
// the value within () is stored inside param1  

console.log("");

function saySomething(param1){
   console.log(`Hello ${ param1 }`); 
} 

let val = "amirul"; 
saySomething(val);  

console.log(""); 

function saySomething(fname, lname){
    console.log(`Hello ${ fname } ${ lname }`);
} 

let firstname = "imam"; 
let lastname = "maula"; 

saySomething(firstname, lastname);  

console.log("");

function saySomething(fname, lname){
    console.log(`Hello ${ fname } ${ lname }`); 
} 

let first_name = "imam"; 
let last_name = "maula"; 

saySomething();   

console.log(""); 

function saySomething2(fname = "amirul", lname = "maula"){
    console.log(`Hello ${ fname } ${ lname }`);
} 

let name1 = "amirul"; 
let name2 = "maula"; 

saySomething2();  

console.log("");

function saySomething3(fname = "amirul", lname = "brinto"){
    console.log(`Hello ${ fname } ${ lname }`); 
}   

let name_1 = "imam"; 
let name_2 = "maula"; 

saySomething3(name_1, name_2); 

console.log("");

function addNum( a=0, b=0) {
    console.log(a+b);
} 

addNum(4, 5); 
addNum(3.6, 2.3);  

console.log("");

// return is used to store a value
// so it can be used later

function addNum ( a=0, b = 0){
    return a+b; 
} 

console.log(addNum(4,5)); 
console.log(addNum(3.6, 2.3));   

console.log("");

function addNum ( a = 0, b = 0){
    return a + b; 
} 

let sum = addNum(3.6, 2.3); 
console.log(sum);  


console.log("");

// no code will run after return inside function

function addNum ( a = 0, b = 0){
    console.log(`${a} + ${b} = ${a+b}`);
    return a + b; 
    console.log("Line after return");
}  
let add = addNum(3.6, 2.3); 
console.log(add); 