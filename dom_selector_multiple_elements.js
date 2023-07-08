// document.getElementsByClassName() 

let list = document.getElementsByClassName('sample-class'); 

list[0].style.background = 'red';
list[0].style.color = 'white'; 
list[0].style.padding = '10px';
list[0].textContent = 'hello world'; 
//console.log(list); 
//console.log(list[0]); 


// document.getElementsByTagName() 
list = document.getElementsByTagName('li'); 
console.log(list); 
//console.log(list[1]);   
//console.log(list[6]);   

list = document.querySelector('ol').getElementsByTagName('li');
console.log(list); 
console.log(list[3]); 


/* list.forEach(function(item){
    console.log(item); 
});*/  

// by default methods of array won't work on 
// getElementsByClassName(), getElementsByTagName() 
// first it has to be converted to an array 
// using Array.from() command

let lis = Array.from(list); 

lis.forEach(function(item){
    console.log(item);
});  


// document.querySelectorAll() 
list = document.querySelectorAll('.sample-class'); 
console.log(list);   

list = document.querySelectorAll('li'); 
console.log(list);   

list = document.querySelector('ul li'); 
console.log(list);  

list = document.querySelectorAll('ol li'); 
console.log(list);  

// querySelectorAll() gives the output as an array

list.forEach(function(item){
    console.log(item); 
}) 

let liOdd = document.querySelectorAll('li:nth-child(odd)'); 
console.log(liOdd); 
  
let liEve = document.querySelectorAll('li:nth-child(even)'); 
console.log(liEve); 

liOdd.forEach(function(item){
    item.style.background = 'grey'; 
    item.style.color = 'white'; // google, facbook don't change the 
    //colour as they are link
});


liEve.forEach(function(item){
    item.style.background = 'red'; 
    item.style.color = 'white'; // google, facbook don't change the 
    //colour as they are link
});