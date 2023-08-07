/*Write a JavaScript program that implements a function that performs 
a series of asynchronous operations in sequence using Promises 
and 'async/await'.*/ 

function asyncOperation(number) {
    let prom = new Promise(function(resolve, reject){
        
        setTimeout(function(){ 
            console.log(`async operation ${number} completed`); 
            resolve(number);

        }, 1000)
    });
    return prom;
} 


async function performSequentialOperation() {
    try {
        console.log("starting the sequential"); 
        
        // The await keyword is used with promises to pause the execution of 
        // an async function until the promise is resolved or rejected.
        
        const result1 = await asyncOperation(1); 
        const result2 = await asyncOperation(2); 
        const result3 = await asyncOperation(3); 
        const result4 = await asyncOperation(a);

        console.log("All operations completed successfully!");
        console.log("Results:", result1, result2, result3, result4);
    } 
    catch(error) {
        console.log("an error occured:", error);
    }
} 

performSequentialOperation();