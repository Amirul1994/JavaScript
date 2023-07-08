let val; 

val = document.getElementById('first');  
val = document.getElementById('first').id; 
val = document.getElementById('first').className; 

document.getElementById('first').style.color = '#aaa';
document.getElementById('first').style.padding = '20px'; 
document.getElementById('first').style.display = 'block'; 

document.getElementById('first').textContent = 'New Title'; 
document.getElementById('first').innerText = 'Again New Title'; 
document.getElementById('first').innerHTML = "<i> Again Again New Title</i>"; 

val = document.getElementById('first'); 
val.innerText = "ha ha ha";  

val = document.querySelector('#first'); 

val = document.querySelector('.big'); 

val = document.querySelector('h1'); 

val = document.querySelector('ol'); 

val = document.querySelector('li'); 

val = document.querySelector('ol li'); 

val.style.background = 'red'; 

val.style.color = 'green';

val = document.querySelector('li:last-child'); 

val = document.querySelector('li:nth-child(3)'); 

document.querySelector('li:nth-child(3)').innerText = "victory"; 

document.querySelector('li:nth-child(odd)').innerText = "beginning"; 

document.querySelector('li:nth-child(even)').innerText = "chance"; 


console.log(val);