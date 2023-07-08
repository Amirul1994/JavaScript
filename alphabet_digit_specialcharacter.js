var exec = prompt(); 

if (exec == ""){
console.log("empty field");
}else if ( (exec >= 'a' && exec <= 'z') ||( exec >= 'A' && exec <= 'Z')){
    console.log(" this is an alphabet");
}else if(exec >= 0 && exec <= 9 ){
    console.log(" this is a digit"); 
}else if (exec <= Infinity){
    console.log(" this is a number");
}else if (exec == ""){
    console.log("empty field");
}else{
    console.log("special character");
}