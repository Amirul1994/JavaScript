// document.getElementById() will pick a single element using Id 

let val; 

// getting an element 
// if multiple id has the same name, the first id will be picked 

val = document.getElementById('document-title'); 
val = document.getElementById('document-title').id; 
val = document.getElementById('document-title').className;


// changing style 
document.getElementById('document-title').style.background = '#333';

// text colour change 
document.getElementById('document-title').style.color = '#fff';
document.getElementById('document-title').style.padding = '10px';
document.getElementById('document-title').style.display = 'block';


// changing content 
document.getElementById('document-title').textContent = 'New Title';
document.getElementById('document-title').innerText = 'Again New Title'; 
document.getElementById('document-title').innerHTML = "<i> Again Again New Title </i>";  

val = document.getElementById('document-title'); 
val.innerText = "Ha Ha Ha"; 


// docuemnt.querySelector() 
//will let us to call using tag, class, id   

// for id, '#' has to be used
val = document.querySelector('#document-title'); 

// for class '.' has to be used 
val = document.querySelector('.title-class'); 

val = document.querySelector('h3'); 

val = document.querySelector('ol'); 

val = document.querySelector('li'); // by default it will return the first one 

val = document.querySelector('ol li');  
val.style.background = 'red'; 
val.style.color = 'white'; 
val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(2)');
document.querySelector('li:nth-child(1)').innerText = "Hello"; 
document.querySelector('li:nth-child(even)').innerText = "bash"; 

document.querySelector('li:nth-child(odd)').innerText = "js";


console.log(val);