console.log("before error"); 

try {
    //test(); 
    undefined.test();

} catch(err) {
  
    // console.log(err);
    console.log(err.message); 
    console.log(err.name); // name - type of error

} finally { 
    // whether there is error or not
    // finally block will run the code
    console.log("I am inside finally");
}

console.log("after error");   

console.log(""); 


let a = 19; 

try {
    if ( a > 15 ) throw "too big";
    else if (a < 5) throw "too small";
} catch(err) {
    console.log(err);
}