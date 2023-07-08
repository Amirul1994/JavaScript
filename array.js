var countries = ["Bangladesh", "USA", "UK"]; 
console.log(countries[0]); 
console.log(countries[1]); 
console.log(countries[2]); 

console.log(countries);  
console.log(countries.length); 

// array is mutable, means any item of an array can be changed 
countries[1] = "Poland"; 
console.log(countries); 

country = countries[0]; 
console.log(country);  

country = countries[90]; 
console.log(country);  

countries[3] = "Norway";  
console.log(countries); 
document.write(countries);  

// length is always >1 of index
countries[countries.length] = "Sweden"; 
console.log(countries); 

// push() will insert a new item, 
// the item will be added at the end 
countries.push("China"); 
console.log(countries);  

// pop() will remove the last item of an array
countries.pop()
console.log(countries); 

countries.push("China", "Japan"); 
console.log(countries);  

// shift() will remove the first item
countries.shift(); 
console.log(countries);  

// unshift(" ") will add item at the beginning 
countries.unshift("Bangladesh"); 
console.log(countries);   

var numbers = []; 
console.log(numbers); 

numbers.push(12); 
console.log(numbers); 

numbers.push(12, "two"); 
console.log(numbers);  

var x ="Bangladesh"; 

// split(""); no value is provided , hence it is empty
// another type of variable value is empty 
// split("") will convert string into array

var y = x.split(""); 
console.log(y);   

var x = "Bangladesh"; 
var y = x.split(); // if the quotation is not given it will convert to array
console.log(y); // output:['Bangladesh']  // but only one item will be in the array 

var x = "Hello World!"; 
var y = x.split(""); 
console.log(y);  

var x = "Bangladesh is a country";  
// the split is done using n. It creates an item before first n, 
// creates another item before second n, and another item 
// after second n onwards
var y = x.split("n"); 
console.log(y);  

var x = "Bangladesh is a country"; 
var y = x.split(" "); 
console.log(y);  

var x = "Bangladesh, China, Finland"; 
var y = x.split(","); 
console.log(y);  

var z = y.toString(); 
console.log(z); 

var x = "Bangladesh is a country"; 
var y = x.split(" ");  
console.log(y);  

z = y.toString(); 
console.log(z);  

// join("") is another function that converts array to string 
// join("") let the user what will be placed among string
// toString() by default will place , (comma) by defauly

z = y.join("/"); 
console.log(z); 

z = y.join(" "); 
console.log(z);  

var x = "Bangladesh is a country"; 
var y = ["Bangladesh", "is", "a", "country"];
z = x.concat(y); 
console.log(z);  

console.log(countries); 
console.log(y);  

// concat() can be used for both string and array
var z = countries.concat(y); 
console.log(z); 

console.log(countries); 

// sort() will arrange the words according to the letter series
console.log(countries.sort()); 

// sort() will not only return the value but also sorted
// the original array
console.log(countries);  

// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.
var h = countries.reverse(); 
console.log(h);  

//https://www.w3schools.com/jsref/jsref_obj_array.asp