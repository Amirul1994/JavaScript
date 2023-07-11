let val; 
let list = document.querySelector('ul'); 
let list2 = document.querySelector('ol'); 
let listItem = document.querySelector('ul li'); 
listItem = document.querySelector('ul li:first-child'); 
listItem2 = document.querySelector('ol li:first-child');


val = list.childNodes[0]; 
val = list.childNodes[1]; 
val = list.childNodes[2]; 
val = list.childNodes[1].nodeName;  

val2 = list2;

val = list.children; 
val = list.children[0]; 
list.children[0].textContent = "hello"; 
list2.children[0].textContent = "hi";  

val = list; 
val = listItem;
val = list.children[1].children; 
val = list.children[1].children[0]; 
val = list.children[1].children[0].href; 

val = list.firstChild; 

val = list.firstElementChild;  
val = list.lastChild; 
val = list.lastElementChild; 

val = listItem; 
val = listItem.children; 
val = listItem.parentElement; 
val = listItem.parentNode; 
val = listItem.parentElement.parentElement; 

val = listItem.nextSibling; 
val = listItem.nextSibling.nextSibling; 

val = listItem.nextElementSibling;  
val = listItem.nextElementSibling.nextElementSibling; 

val = document.querySelector('ul li:last-child'); 
val = val.previousSibling;
val = val.previousElementSibling;



console.log(val)