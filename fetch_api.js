// fecth api 
// can fetch information from external source 
// uses javascript promise  

document.getElementById("get_data").addEventListener('click', getData); 

// let test = () => {}; 
// the code above is a function declaration example 
// which is called arrow function 

// first declare a variable 
// (); if there is any parameter type it here 
// {}; the code of the function inside {}


function getData() { 
    // fetch returns promise 
    // when the fetch function is called, 
    // the information is returned as promise
    
    fetch('https://dummyjson.com/products/1')
    .then(function(res){
        //console.log(res.text());
        //console.log(res.json()); 
        return res.json();
    }) 
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })
}

// let test = () => {}; 
// the code above is a function declaration example 
// which is called arrow function 

// first declare a variable 
// (); if there is any parameter type it here 
// {}; the code of the function inside {}

/*
function getData() {
    fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(data => { console.log(data); })
        .catch(err => {console.log(err); })
}*/