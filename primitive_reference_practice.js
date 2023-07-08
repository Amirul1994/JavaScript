// primitive 
var a = 56; 
console.log(a); 

var b = a; 
console.log(b); 
var a = 5; 
console.log(b);
console.log(a);   

var c = true; 
var d = c; 
console.log(d); 

var c = false; 
console.log(c); 
console.log(d);  

var e = "good"; 
var f = e ;
console.log(f);

var e = "bad"; 
console.log(e); 
console.log(f); 

// reference   
var g = ["a", "b", "c", "d"]; 
var h = g; 
console.log(g); 
console.log(h); 

g[3] = "this"; 
console.log(g); 
console.log(h);  

h[3] = "that"; 
console.log(h); 
console.log(g);

h = [1, 2, 3, 4]; 
console.log(h); 
console.log(g);  

g = ["c", "d", "e", "f"]; 
console.log(h); 
console.log(g);  

var i = { name: "amirul", age: 30}; 
var j = i; 
console.log(i);  
console.log(j);  

j.name = "kobir"; 
console.log(j);
console.log(i);  

var i = {name: "imam", age: 30 }; 
console.log(i); 
console.log(j); 