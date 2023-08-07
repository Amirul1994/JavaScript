document.getElementById('get_data').addEventListener('click', getdata); 

function getdata(){
    // let n = fetch('https://dummyjson.com/products/1'); 
    // console.log(n); 
    fetch('https://dummyjson.com/products/1')
    .then(function(a){ 
        //console.log(a.json()); 
        return a.json();
    }).then(function(b){
        console.log(b);
    }).catch(function(c){
        console.error(c);
    })
    
} 



document.getElementById('output').addEventListener('click', data); 

function data() {
    let n = fetch('https://dummyjson.com/products/3lll')
    .then(function(a){
        return (a.json); 
    }).then(function(b){
        console.log(b);
    }).catch(function(c){
        console.log(c);
    })
}