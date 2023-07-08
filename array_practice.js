var capital = ["Dhaka", "Washington", "Tokyo"]; 
console.log(capital[2]); 
console.log(capital[0]); 
console.log(capital[1]); 
console.log(capital[29]); 

capital[1] = "London"; 
console.log(capital);  

capital[2] = "Beijing"; 
console.log(capital);  

var a = capital.length; 
console.log(a);  

capital[capital.length] = "Delhi"; 
console.log(capital);  

capital[4] = "Washington"; 
console.log(capital); 

capital[7] = "asdada"; 
console.log(capital);   

capital.push("Tokyo"); 
console.log(capital);  

capital.push("Wellington", "Colombo", "Otowa"); 
console.log(capital); 
document.write(capital); 

capital.pop(); 
console.log(capital); 

capital.shift(); 
console.log(capital); 

capital.unshift("Dhaka"); 
console.log(capital); 

var number = [15, 16, 17, 18, 19, 20]; 
console.log(number[1]); 
console.log(number[0]); 
console.log(number[2]); 
console.log(number[3]); 
console.log(number[4]); 
console.log(number[5]); 

number[2] = 21; 
console.log(number); 

console.log(number.length); 
var b = console.log(number.length); 

number[6] = 22; 
console.log(number);  

number[number.length] = 23; 
console.log(number); 

number.push(24); 
console.log(number); 

number.push(25, 26, 27, 28); 
console.log(number); 

var c = number.pop(); 
console.log(c); 
console.log(number); 

number.shift(); 
console.log(number); 

number.shift(); 
var d = number; 
console.log(d);   

number.unshift(36); 
var e = console.log(number); 


var aa = "Amirul"; 
var bb = aa.split(""); 
console.log(bb);  

var cc = aa.split(); 
console.log(cc);  

var dd = aa.split(" "); 
console.log(dd); 

var ee = aa.split("/"); 
console.log(ee);  

var ff = aa.split("i"); 
console.log(ff); 

var gg = "My name is amirul"; 
var hh = gg.split("a"); 
console.log(hh);   

var ii = gg.split(" "); 
console.log(ii);  

var jj = "Imam, Muhammad, Amirul, Maula"; 
var kk = jj.split(","); 
console.log(kk);  

var ll = kk.toString(); 
console.log(ll);  

var mm = ["Imam", "Muhammad", "Amirul", "Maula"]; 
var nn = mm.join(); 
console.log(nn); 

var oo = mm.join(""); 
console.log(oo);  

var pp = mm.join(" "); 
console.log(pp);  

var rr = ["Imam", "24", "amirul" ];
var ss = rr.join(","); 
console.log(rr);  

var tt = rr.join("/"); 
console.log(tt);   

var uu = "This is a practice"; 
var vv = ["test", "many", "other"]; 
var ww = uu.concat(vv); 
console.log(ww);   

var xx = ["I", "have", "to ", "try"]; 
var yy = "better and harder"; 
var zz = xx.concat(yy); 
var A = yy.concat(zz); 

console.log(zz); 
console.log(A);     

var B = ['4', '8', '1', '98', '0']; 
var C = B.sort(); 
console.log(C);   

var D = ["Imam", "Muhammad", "Amirul", "Maula"]; 
var E = D.sort(); 
console.log(E);  

var F = ['2', "amirul", "6", 'try', "Dhaka", 'Canada', '1']; 
var G = F.sort(); 
console.log(F); 
console.log(G);   

var H = ["vbg", "nmb", "six", "real", "asw"]; 
var I = H.reverse(); 
console.log(H); 
console.log(I);  