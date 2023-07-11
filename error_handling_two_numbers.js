/* Write a JavaScript function that accepts two numbers as parameters 
and throws a custom 'Error' if the second number is zero. */ 

function num(a, b) { 
    try {
        if (b == 0) throw "second number can't be zero"; 
        else throw "valid second number"; 
    } 
    catch(c) {
         console.log(c);
    }

}; 

num(7, 0);