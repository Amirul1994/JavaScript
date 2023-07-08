// function helps to reuse code   
// two types - builtin, user defined 

// Execution of function 
saySomething(); // function can be called before or after
                // the declaration of function

// Declaration of function 
function saySomething() { // If the function is called, which code 
    console.log("Hello!"); // will run is written within {} of 
    console.log("I am learning Javascript!"); // the function
    console.log("Bohubrihi");
}   

console.log("");

// Execution  of function  
saySomething();   

// code will run from beginning 
// the editor will see the declaration of the function 
// then it will look for where the function is called 
// when the execution of function is found, 
// the code inside {} of the function declaration 
// will be executed 
// function can be called inside the function 