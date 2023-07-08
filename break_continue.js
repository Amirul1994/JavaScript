for (var i =1; i<=5; i++){
    console.log(i); 
                            
}                           

console.log("");

for (var i = 1; i<=5; i++){
    console.log(i); 
    break;
}  

// break is used to stop a loop  
// it permits a loop to run just before the break. 
// when the break is got, the loop is exited
// in the above example , it prints 1 because 
// after running once , it gets break statement 

console.log("");

for ( var i = 1; i<=5; i++){
    if ( i == 3 ){
        break;
    } 
    console.log(i);
}  

console.log("");

for(var i =1; i<=5; i++){
    console.log(i); 
    
    if (i == 3 ){
        break;
    }
}  

console.log(""); 


// continue will skip the loop for once 
// it skips the next statement  

for ( var i = 1; i<=5; i++){
    if(i == 4){
        continue;
    } 
    console.log(i);
}   

console.log(""); 

for (var i = 1; i <= 10; i++){
    if(i % 2 == 1){
        continue; 
    } 
    console.log(i); 
}