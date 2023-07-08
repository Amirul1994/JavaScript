// traverse - jump from one element to other element in dom 

let val; 
let list = document.querySelector('ul'); 
let listItem = document.querySelector('ul li'); 
listItem = document.querySelector('ul li:first-child'); 
listItem = document.querySelector('ul li:first-child'); 


val = list; 
val = listItem;  

// get child nodes 

val = list.childNodes; // in the output it has shown 'text' because of 
                       // enter after 'li' and 'ul' tag 

val = list.childNodes[0]; 
val = list.childNodes[1]; 
val = list.childNodes[2]; 
val = list.childNodes[1].nodeName; 

// list.childNodes: NodeList(9) [text, li.sample-class, text, li, text, li, text, li, text]  

// there are several types of nodes
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype

val = list.childNodes[1].nodeType; 

val = list.children; // won't show any text node 
val = list.children[0];
list.children[0].textContent = "hello"; 
val = list.children[1].children; 
val = list.children[1].children[0]; 
val = list.children[1].children[0].href; 

val = list.firstChild; 

// firstElementChild will show without text 
val = list.firstElementChild; 
val = list.lastChild; 
val = list.lastElementChild; 

val = list.childElementCount; 

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


console.log(val); 