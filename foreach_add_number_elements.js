// add together all the elements in the numbers array, 
// and store the total in the variable total     

var number = [1, 2, 7, 8, 9]; 
var total = 0;

var numbers = function(item){
    
  total = total + item;
    
}; 

number.forEach(numbers);  
console.log(total);  