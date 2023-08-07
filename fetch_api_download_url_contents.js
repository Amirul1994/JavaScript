/* Write a JavaScript function that takes an array of URLs and 
downloads the contents of each URL in parallel using Promises. */ 

function downloadContents(urls) {
    // map() creates a new array from 
    // calling a function for every array element.
    let promises = urls.map(function(url){
        //console.log(url);
        let prom = new Promise(function (resolve, reject){
            fetch(url)
            .then(function(response){
                //console.log(response);
                if (!response.ok) {
                    throw new Error(`http error! status: ${response.status})`);
                } 
                return response.text();
            }) 
            .then(function(data) {
                resolve(data);
            }).catch(function(error){
                reject(error);
            });
        });
        console.log(prom);
        return prom;
    }) 
    console.log(promises);
    // Promise.all() method is actually a method of Promise object 
    // that takes an array of promises(an iterable) as an input. 
    // which have resolved or when the iterable contains no promises 
    // if any of the passed-in promises reject, the Promise.all() method asynchronously 
    // rejects the value of the promise that already rejected, 
    // whether or not the other promises have resolved. 
    console.log(Promise.all(promises));
    return Promise.all(promises);
} 

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ]; 

downloadContents(urls)
.then(function(contents) {
    console.log('downloaded contents:', contents);
}).catch(function(error){
    console.log('error:', error.message);
})