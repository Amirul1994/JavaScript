/* Write a JavaScript program that converts a 
callback-based function to a Promise-based function.*/ 

/* callbackBasedFunction: This function takes param1, param2, 
and a callback as parameters. It simulates an asynchronous operation 
using setTimeout with a 1-second delay. 
If both param1 and param2 are truthy values, 
it calls the callback with null and 'success'. 
Otherwise, it calls the callback with an error message. */


function callbackBasedFunction(param1, param2, callback) {
    
    setTimeout(function() { 
        
        if (param1 && param2) {
            callback(null, 'success');
        }else {
            callback('error: invalid parameters');
        }
    }, 1000); 
} 


/* promiseBasedFunction: This function wraps callbackBasedFunction 
in a promise. It creates a new Promise and 
invokes callbackBasedFunction with the provided parameters. 
Inside the callback of callbackBasedFunction, 
it checks if there is an error and rejects the promise 
with the error if present, or resolves 
the promise with the result if there's no error.*/


function promiseBasedFunction(param1, param2) {
    let prom = new Promise (function(resolve, reject){
        
        callbackBasedFunction(param1, param2, function(error, result) {
            if (error) {
                reject(error); 
            }else {
                resolve(result);
            }
        });
        
    }) 
    return prom;
}


/* example: This is an async function that demonstrates 
how to use the promise-based function promiseBasedFunction with 
async/await. It calls promiseBasedFunction with true 
for both param1 and param2. Since both parameters are truthy, 
the promise will resolve with 'success', and 
the result will be printed to the console. 
If an error occurs during the promise execution, 
it will be caught in the catch block and printed as an error. */

async function example() {
    try { 
        // The await keyword can only be used inside an async function.
        // The await keyword makes the function pause the execution and 
        // wait for a resolved promise before it continues
        
        let result = await promiseBasedFunction(true, true);
        console.log('result:', result);
    } 
    catch(error) {
        console.error('error:', error);
    }
} 

example();