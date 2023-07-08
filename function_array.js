// array iteration using forEach 
// forEach iterate every member of array

var foods = ["Cakes", "Ice Cream", "Chocolates", "Bread"]; 
var numbers = [1, 32, 31, 2]; 

// 1st Parameter : Item 
// 2nd Parameter : Index 
// 3rd Parameter : Whole array

foods.forEach(function(item, i, abc){
    console.log(`Index : ${i} and Item ${item}`); 
    console.log(abc);
});  

console.log(""); 

let printEverything = function(item, i, abc){
    console.log(`Index : ${i} and Item ${item}`); 
    console.log(abc);  
} 

foods.forEach(printEverything);   

console.log("");


// array iteration using map 
// map will create a new array from an existing array 
// if a new array has to be created, return must be used
// 1st Parameter : Item 
// 2nd Parameter : Index 
// 3rd Parameter : Whole array


function addSomething(item){
    return `${item} is a Food`;
} 

let arr_res = foods.map(addSomething); 

let arr_square = numbers.map(function(item){
     
    return item*item;

})

console.log(arr_res); 
console.log(arr_square);