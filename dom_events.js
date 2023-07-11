// events of javascript 
// events help to run javascript code from html page  

// onclick event 

function message(){
    console.log("mouse over button");
} 

// event listener 
// addEventListener() will let us listen the event from the js code
// it will have two parameters 
// first: what event will activate 
// second: function, the function will be called 
// when the event is triggered 
// important - don't use () after the function name 
// otherwise it will run the function without the event happening

document.getElementById('sample-btn').addEventListener('click', message); 


function message(){
    console.log("button clicked");
} 


document.getElementById('sample-btn2').addEventListener('dblclick', message2); 

function message2(){
    console.log("new message");
} 


/*
document.getElementById('sample-btn3').addEventListener('click', message3); 

function message3(e){
   let val = e; 
   val = e.target;
   val = e.target.id;
   val = e.timeStamp; // timestamp shows the amount of miliseconds between page load and click happen 
   val = e.type; // type - event type 

   val = e.clientY; // clientY - the position of the pixel on Y axis of the page

   val  = e.clientX; // clientX - the position of the pixel on X axis of the page  

   val = e.offsetY; // offsetY - the position of the pixel on Y axis of the button boundary 

   val = e.offsetX; // offsetX - the position of the pixel on X axis of the button boundary 

    
   
   
   console.log(val);
} 
*/  


document.querySelector(".container").addEventListener('mouseover', message3); 


document.querySelector(".container").addEventListener('mousemove', message3); 

document.querySelector('.container').style.background = "red";

function message3(e) { 

   let val = e; 
   val = e.target;
   val = e.target.id;
   val = e.timeStamp; // timestamp shows the amount of miliseconds between page load and click happen 
   
   val = e.type; // type - event type 

   val = e.clientY; // clientY - the position of the pixel on Y axis of the page

   val  = e.clientX; // clientX - the position of the pixel on X axis of the page  

   val = e.offsetY; // offsetY - the position of the pixel on Y axis of the button boundary 

   val = e.offsetX; // offsetX - the position of the pixel on X axis of the button boundary 

   //console.log(val); 

   val = this; 

   this.style.background = `#${e.offsetX}`;

   console.log(e.offsetX);
   console.log(e.offsetY);
   console.log(val);
}  


document.querySelector("#name").addEventListener('focus', test);


function test(e) {
    console.log("focused"); 
    this.style.background = 'blue';
}; 


document.querySelector('#name').addEventListener('keyup', test2); 


function test2(e) {
    console.log(this.value); // value of input filed 

    document.getElementById("demo").innerText = this.value;
} 

// https://www.w3schools.com/jsref/dom_obj_event.asp