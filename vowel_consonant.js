var letter = prompt("Enter the letter"); 

if(letter==""){
    alert("empty field");
}else if(letter >=0 && letter <= 9 ){
   alert("don't type digit");
}else if(letter <= Infinity){
    console.log("don't type number");
}
else if ((letter == 'a') || (letter == 'e') || (letter == 'i') || (letter == 'o') || (letter == 'u')){
    alert ( "the letter is vowel")
}else if ( (letter == 'A') || (letter == 'E') || (letter == 'I') || (letter == 'O') || (letter == 'U')){
    console.log("the letter is vowel");
}
else if((!(letter >= 'a') && !(letter <='z')) ||( !(letter >= 'A') && !(letter >= 'Z')) ) {
    alert("don't type special character"); 
}else{
    console.log("the letter is consonant");
}