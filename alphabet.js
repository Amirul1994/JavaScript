var letter = prompt("enter the letter"); 

if (letter>='a' && letter<='z'){
    console.log("it is a letter")
}else if( letter>='A' && letter<='Z' ){
    console.log("this is a letter"); 
}else if (letter == ""){
    console.log("empty field ");
}else{
    console.log("this is not a letter"); 
}

