// Write a JavaScript program to create a dropdown menu 
// that shows and hides its options when clicked.  


let a = document.querySelector(".dropdown-button"); 
console.log(a);

let b = document.querySelector(".dropdown-options");
console.log(b);

a.addEventListener('click', hide); 

function hide() {
   /* 
    b.style.display = 
    b.style.display === 'none' ? 'block' : 'none'; 
    
    console.log(b.style.display); */ 
    
    if (b.style.display === 'none') {
        b.style.display = 'block';
      } else {
       b.style.display = 'none';
      } 
      console.log(b.style.display);
};

