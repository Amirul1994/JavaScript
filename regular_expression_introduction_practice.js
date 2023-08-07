var a = /amirul/; 
var b = "amirul maula"; 
var c = "Amirul Maula"; 
var o = "ImamAmirul Muala"; 
var f = /amirul/i;

var d = a.exec(b); 
var e = a.exec(c);
let p = f.exec(o);

console.log(p);

var g = f.exec(c); 

console.log(d);
console.log(e); 
console.log(g);  

var h = a.test(c);
var i = f.test(c); 

console.log(h); 
console.log(i); 

var j = c.match(a);
var k = c.match(f);  

console.log(j); 
console.log(k); 

var l = c.search(a);
var m = c.search(f); 

console.log(l);
console.log(m);  

var n = c.replace(f, "Imam"); 
console.log(n);
console.log(f.source);