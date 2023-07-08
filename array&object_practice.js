var a = ["me", "myself",["mother","sister"], "mine", "mything"]; 
console.log(a);  

var b = a[2][1]; 
console.log(b);    

var c = [1, 4, 2, 7, [3,[5,6,[8,9,10]]]]; 
var d = c[4][1][2][2]; 
console.log(d);    

var e = [[1,5],[2,[4,6,[8,[9,0]]]]]; 
var f = e[1][1][2][1][1]; 
console.log(f);   

var g = {city: "Chattogram", area: "unknown", population: 7}; 
console.log(g["city"]);   

var h = {name: "raisa", age: 24, occupation: "student", hehe:{ledu: "yes", kid: "yes"}};  

console.log(h);  

var i = h["hehe"]['kid']; 
console.log(i);    

var j = {job1: "it", job2:"programming", job3:{job4:"none",job5:{job6:"unknown"}}};   

var k = j["job3"]["job5"]["job6"]; 
console.log(k);  

var l = [1, 2, 3, 4,{name:"amirul", age: 30}];  
var m = l[4]["name"]; 
console.log(m);  

var n = [4,5,6,7,{name: "kobir", age:27}]; 
var o = n [4]["age"]; 
console.log(o); 

var p = ["amirul", "imam", "brinto", [1, 3, {age: 30, address: "shewrapara"}]];  

var q = p[3][2]["address"]; 
console.log(q);   

var s = {name: "amirul", age: "30", occupation: "unemployed", other:[2,3]}; 
var t = s.other[1]; 
console.log(t);   

var u = {name: "amirul", age: "30", location: "Dhaka", address:["none","yes"] }; 

var v = u.address[0]; 
console.log(v);  

var w = {room: 3, height:[5, 8, 10], width:[10, 15,{choice:"yes"}]}; 
var x = w.width[2].choice; 
console.log(x);   

var y = [1, 4, 17, {name:"amirul", hobby:[0, 1, 2, {interest: "no", future:[1, 0]}]}]; 

var z = y[3].hobby[3].future[1]; 
console.log(z); 