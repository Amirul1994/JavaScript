/*
var city = ["dhaka", "chattogram", "rajshahi", "sylhet", "khulna"]; 

city.forEach(function(val){
    console.log(val);
});  

console.log("");

city.forEach(function(value, index){
      console.log(index);
});  

console.log(""); 

city.forEach(function(value, index, arr){
       console.log(arr);
}); 


console.log(""); 

city.forEach(function(value, index, arr){ 

    console.log(value); 
    console.log(index);
    console.log(arr);
}); 

console.log(""); 

var number = [1, 2, 3, 4, 5, 6];  

number.forEach(function(item){
     console.log(item);
});  

console.log(""); 

number.forEach(function(item, index){
    console.log(index);
}); 

console.log(""); 

number.forEach(function(item, index, arr){
      console.log(arr);
});  

console.log(""); 

number.forEach(function(a, b, c){
    console.log(a);
    console.log("")
    console.log(b);
    console.log("");
    console.log(c);
}); 

console.log("");

var city2 = ["london", "newyork", "sydney"]; 

var cityname = function(item, index, arr){
     
    console.log(item); 
    console.log(""); 
    console.log(index); 
    console.log(""); 
    console.log(arr);
} 

city2.forEach(cityname);   


let place = ["one", "two", "three"]; 

place.forEach(function(a, b, c){ 

    console.log(a); 
    console.log(b); 
    console.log(c); 
});    

let position = function(a, b, c){
   
    console.log(a); 
    console.log(b); 
    console.log(c); 

};   

place.forEach(position);        

console.log(""); 

let name = ["amirul", "imam", "brinto"]; 

let name2 = function(aa, bb, cc){
    console.log(`The name is ${aa} and position is ${bb}`);
};  

name.forEach(name2); 


var city3 = ["otowa", "tokyo", "moscow"];  

var city4 = function(v, n, m){
   
   console.log(v); 
   console.log(n); 
   console.log(m); 
  
}; 

city3.forEach(city4);  

console.log(""); 
*/  

var person = ["imam", "amirul", "brinto"]; 

var individual = function(item){

    console.log(item);

}; 

person.map(individual); 


var newarr = function(item,index,arr){
    console.log(`${item} is a man`); 
    console.log(""); 
    console.log(index); 
    console.log(arr);
}; 

person.map(newarr);  

person.forEach(function(){

});  

var newarr2 = person.map(function(item, index, arr){
    return index; 

}); 

console.log(newarr2);