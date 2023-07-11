// create element 

let olItem = document.createElement('li');  

olItem.className = "a new another-class";
olItem.id = "new-element";  

// add attribute 
olItem.setAttribute('title', 'A title to new Element');

olItem.appendChild(document.createTextNode('JavaScript')); 

document.querySelector('ol').appendChild(olItem);

// console.log(olItem);  

let ulItem = document.createElement('li'); 
let link = document.createElement('a');  

link.appendChild(document.createTextNode('Instagram'));

link.setAttribute('href', 'https://www.instagram.com'); 

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem); 



//console.log(ulItem);
//console.log(link);  


// replacing elements  

let newHeading = document.createElement('h1'); 
newHeading.appendChild(document.createTextNode('H1 New Heading')); 

newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');  

parent.replaceChild(newHeading, oldHeading); 


//console.log(newHeading); 
//console.log(oldHeading);  


// remove element  

let listItems = document.querySelectorAll('li'); 
let list = document.querySelector('ul'); 

//listItems[0].remove(); 
//listItems[5].remove(); 

// list.removeChild(listItems[0]); 
list.removeChild(listItems[5]); 

list.classList.add("test"); 
list.classList.add("test-new"); 

list.classList.remove("sample-class"); 

let val = list.hasAttribute('class');
val = list.hasAttribute('title');

list.setAttribute("title", "New Title"); 
list.removeAttribute("title");


console.log(val);
console.log(list);
console.log(listItems); 