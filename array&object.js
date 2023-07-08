var arr = [10, 12, ["a", "b"], 8, 9]; 
console.log(arr);  

var a = arr[2]; 
console.log(a); 

var b = arr[2][0]; 
console.log(b);  

var arr = [1, 2, ["a", ["word1", "word2"], "b"], 7, 18];  
var c = arr[2][1][0]; 
console.log(c); 

var d = arr[2][1][1]; 
console.log(d);  

var arr = [1, 2, ["a", "b"], {prop1:"Item 1", prop2: "Item 2"}]; 
console.log(arr);  

var e = arr[3]["prop1"]; 
console.log(e);  

var f = arr[3].prop1; 
console.log(f);    

var arr = ["Item1", "Item2", {prop1:"Item 3", prop2:[1,2,["a","b"]]}]; 
console.log(arr);  

var g = arr[2]["prop2"][2][0]; 
console.log(g); 

var h = arr[2].prop2[2][0]; 
console.log(h);  

var obj = {prop1:"Prop 1", prop2:"Prop 2", prop3:["item 1 of prop 3", "item 2 of prop 3"]};  

console.log(obj);  

var i = obj.prop3[1]; 
console.log(i); 