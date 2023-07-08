console.log(" Hello World!");
console.log( "Hello" + "World"); 
console.log('hello "" world');  
console.log("hello '' world");  

console.log("hello \" world"); 
console.log('hello \" world'); 

console.log("hello \\ world"); 

console.log('hello \n world'); 

console.log('hello \t world'); 

var a = "this is ok "; 
var b = a.length; 
console.log(b);  

var c = "amirul"; 
console.log(c[0]); 
console.log(c[1]); 
console.log(c[2]); 
console.log(c[3]); 
console.log(c[12]); 

var d = "this is a test."; 
console.log(d[4]);    

var e = "this is ok"; 
var f = e.toUpperCase(); 
console.log(f); 

var g = "amirul"; 
var h = g.toUpperCase(); 
console.log(h); 

var i = "THIS IS SECOND TEST"; 
var j = i.toLowerCase(); 
console.log(j); 

var k = "AMIRUL"; 
var l = k.toLowerCase();
console.log(l);  

var n = "   this is third test   ";
var o = n.trim(); 
console.log(o);  

var p = " Amirul  "; 
var q = p.trim(); 
console.log(q);   

var r = "loopedback"; 
var s = r.slice(3,7); 
console.log(s); 

var s = r.slice(2,6); 
console.log(s); 

var s = r.slice(1,10); 
console.log(s); 

var s = r.slice(3); 
console.log(s); 

var s = r.slice(-4, -2); 
console.log(s); 

var s = r.slice(-6, -1); 
console.log(s); 

var s = r.slice(-3); 
console.log(s); 

var t = "loopedback"; 
var u = t.substr(3,4); 
console.log(u); 

var u = t.substr(2,2);
console.log(u);

var u = t.substr(3,6); 
console.log(u); 

var u = t.substr(1,3); 
console.log(u); 

var u = t.substr(5); 
console.log(u); 

var v = "amirul"; 
var w = v.replace("m","fv"); 
console.log(w); 

var w = v.replace("a", "t"); 
console.log(w); 

var w = v.replace("r","i"); 
console.log(w);  

var x = "loopedback"; 
var y = x.concat(" a ", "website"); 
console.log(y); 

var z = y.concat(" " ,"where", " I", " write"); 
console.log(z);