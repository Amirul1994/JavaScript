/*Write a JavaScript program that uses a try-catch block to catch and handle 
a 'TypeError' when accessing a property of an undefined object.*/  

try {
    //a.length; 
    undefined.a;
    
} catch(b) {
   console.log(b);
   console.log(b.name);
}