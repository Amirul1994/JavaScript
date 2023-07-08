function number(){
    var num1 = prompt("enter number 1");
    var num2 = prompt("enter number 2"); 

    num1 = parseInt(num1); 
    num2 = parseInt(num2);
    
    
    if (num1 > num2){
        console.log("number 1 is maximum");
    }else if (num2 > num1){
        console.log("number 2 is maximum");
    }
}


number()