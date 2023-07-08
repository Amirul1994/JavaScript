// using foreach, turn the number strings or the 
// stringPrices array into floats, and add them all, 
// storing the total in the variable total  

let stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
var total = 0; 

var stringPrices2 = function(item, index){
    
    var a = parseFloat(item); 
    console.log(a); 

    for (var i = 0; i < stringPrices.length; i++){

        stringPrices[index] = a; 
        //console.log(stringPrices); 
    }
}; 

stringPrices.forEach(stringPrices2);  
console.log(stringPrices);  


var stringPrices3 = function(item){
    
    total += item; 
} 

stringPrices.forEach(stringPrices3); 
console.log(total);