/*Write a JavaScript a function that makes an HTTP GET request and 
returns a Promise that resolves with the response data. */ 

function make_get_request(url) {
    let prom = new Promise(function(resolve, reject){
        fetch(url)
        .then(function(response){
            console.log(response);
            
            if (!response.ok) {
                throw new Error(`http error! status: ${response.status}`)
            }
            return response.json();
        })
        .then(function(data){ 
            //console.log(data);
            resolve(data)
        }).catch(function(error){
            reject(error);
        })
    });
    return prom;
}; 


make_get_request('https://dummyjson.com/products/1')
.then(function(data){
    console.log('response data:', data);
}).catch(function(error){
    console.log('error:', error.message);
});  

console.log("");


function make_get_request2(url) {
    let prom = new Promise(function(resolve, reject){
        fetch(url)
        .then(function(response){
            console.log(response);
            
            if (!response.ok) {
                throw new Error(`http error! status: ${response.status}`)
            }
            return response.json();
        })
        .then(function(data){ 
            //console.log(data);
            resolve(data)
        }).catch(function(error){
            reject(error);
        })
    });
    return prom;
}; 


make_get_request2('https://dummyjson.com/products/1ljj')
.then(function(data){
    console.log('response data:', data);
}).catch(function(error){
    console.log('error:', error.message);
});