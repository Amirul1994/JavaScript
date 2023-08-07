/* Write a JavaScript function that fetches data from multiple APIs concurrently 
and returns a combined result using Promises and 'Promise.all()'.*/

// The function fetchDataFromAPI(url) initiates a fetch request to the provided url and 
// returns a Promise that resolves to the response object.

function fetchDataFromAPI(url) {
    console.log(url);
    
    // The .then() method is used as a promise handler, which will be executed 
    // when the fetch request is successful and the response is received.

    return fetch (url)
    .then(function(a){ 
        
        console.log (a);
        
        // If the response status is not OK (not equal to 200), 
        // it means there was an HTTP error. In such a case, 
        // the function throws an error with the corresponding status message.

        if(!a.ok) {
            throw new Error(`http error! status: ${a.status}`);
        } 
        console.log(a.json());
        
        // If the response status is OK (equal to 200), 
        // the function parses the response body as JSON and returns it as a Promise. 
        // This allows the caller of the fetchDataFromAPI(url) function 
        // to handle the JSON data when the Promise is resolved.
        return a.json();
    });
} 


// The apiUrls array is passed as input to the function.
function fetchMultipleAPI(apiUrls) { 

// The apiUrls.map(function(url){ ... }) part is used to create an array of promises. 
// It iterates through each URL in the apiUrls array and 
// calls the fetchDataFromAPI(url) function for each URL. 
// As a result, it creates an array of Promises for each API call.
    const promises = apiUrls.map(function(url){
        console.log(url);
        return fetchDataFromAPI(url);
    })
    console.log(promises); 

// The Promise.all(promises) method is used to handle multiple promises concurrently. 
// It takes an array of promises (promises) and returns a new Promise 
// that resolves when all the promises in the array have resolved or rejects 
// when any of the promises in the array is rejected.

// Once all the individual API requests are completed successfully (all promises are resolved), 
// the returned Promise will resolve, and the .then() handler can access the results. 
// The resolved value will be an array containing the JSON data from all the API responses
    return Promise.all(promises);
} 


let apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];  


// fetchMultipleAPI(apiUrls): This function is called with the array apiUrls, 
// which contains multiple API URLs. 
// fetchMultipleAPI(apiUrls) internally fetches data from all the API URLs 
// concurrently using Promise.all() and the fetchDataFromAPI(url) function. 
// Once all the API requests are completed successfully, the returned Promise 
// from fetchMultipleAPI(apiUrls) will resolve. The .then() handler will be executed 
// with the results parameter, which will be an array containing 
// the JSON data from all the API responses. 
// Inside the .then() handler, the code logs the combined results 
// to the console using console.log('combined results:', results).

fetchMultipleAPI(apiUrls)
.then(function(results){
    console.log('combined results:', results);
}) 
.catch(function(error){
    console.log('error:', error.message);
}); 

// If any of the API requests encounter an error (i.e., any of the promises is rejected),
// the returned Promise from fetchMultipleAPI(apiUrls) will be rejected. 
// The .catch() handler will be executed with the error parameter, 
// which will contain the error object