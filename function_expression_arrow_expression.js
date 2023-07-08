// another two methods to declare function 
// function expression 
// arrow function (ES6) 

// normal declaration 

function saySomething(name){
    console.log('Hello ' + name);
}   

// function expression 

let saySomething1 = function(name2) {
    console.log('hello ' + name2);
}   




// arrow function  

let saySomething2 = (name3, name4) => {
    console.log("I am " + name3 + " " + name4);
}   




saySomething("Bohubrihi"); 
saySomething1("amirul");  
saySomething2("javascript", "es6");   


let saySomething3 = name5 => {
    console.log(name5); 
} 

saySomething3("imam")