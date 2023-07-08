let val; 

// in the class, 'this' is used to indicate for object property 
// 'this' is also used in the object, if a property value is declared
// as a function, to access the property value  
// in open space, 'this' indicates the whole html documnet 

val = this; 

// this and window do the same task
val = window;
val = window.document;
val = document; // document is the all elements of html

// document.all will show all the html elements in an array 
val = document.all;
val = document.all[2]; 
val = document.all.length; 
val = document.head; 
val = document.body; 
val = document.doctype;
val = document.domain; 
val = document.URL; 
val = document.characterSet; 
val = document.contentType; 

val = document.forms; 
val = document.forms[0]; 
val = document.forms[1];
val = document.forms[0].method; 
val = document.forms[0].action;

val = document.links; 
val = document.links[0]; 
val = document.links[0].href; 
val = document.links[0].className; 
val = document.links[0].classList;  

val = document.images;

val = document.scripts;
val = document.scripts[0]; 
val = document.scripts[0].src; 
val = document.scripts[0].getAttribute('src'); 

links = document.links; 

// though links, scripts etc. are returning value
// in an array, but for each loop can't be applied directly 

/*
links.forEach(function(link){
    console.log(link);
}); */ 


let linkArr = Array.from(links); 

linkArr.forEach(function(link){
    console.log(link);
}); 

linkArr.forEach(function(link){
    console.log(link.getAttribute('href'));
});



console.log(links);
console.log(val);