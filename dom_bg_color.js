// Write a JavaScript function that changes the background color  
// of an element when a mouse enters it.

document.getElementById("btn").addEventListener('mouseover', changecolour); 

function changecolour() {
    document.getElementById("btn").style.color = 'green';
}  

document.querySelector('.myelement').addEventListener('mouseenter', bgcolour); 

function bgcolour() {
    let a = document.querySelector('.myelement');
    a.style.backgroundColor = 'green';
};