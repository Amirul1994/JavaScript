if (true){
    console.log("if statement executed"); 
} else{
    console.log("else statement executed");
}

console.log("end of if statement!");  

if (false){
    console.log("if statement executed"); 
} else{
    console.log("else statement executed");
}

console.log("end of if statement!");   


var age = prompt(); 

if ( age >= 50 ) {
    console.log("old"); 
}else if(age >= 30 && age < 50){
    console.log("under 50 but above or equal 30")
} 
else if(age < 30 && age >= 18){
    console.log("under 30 but above or equal 18");
} else if ( age < 18 && age >= 0){
    console.log("under 18");
}else{
    console.log("invaid input");
}