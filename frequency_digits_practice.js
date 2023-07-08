var num = prompt("enter number"); 
var count = {}; 

for ( digit = 0; digit <= 9; digit++ ){
    
    count[digit] = 0; // 0:0, 1:0

  for ( var i = 0; i < num.length; i++){
    
    current_digit = parseInt(num[i]); // as the number is in string, so it
                                      // is needed to convert integer 
    
        // compare the current_digit and the digit in count[digit]                            
        if (current_digit == digit){
         
        // increment the count[digit], if the digit 
        // is found in the number
        
        count[digit]++;
    }
  }
} 

console.log(count); 

for (var x in count){
    console.log(`${x} is ${count[x]} time`);
}