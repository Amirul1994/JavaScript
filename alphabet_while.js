// Write a program to print all alphabets from a to z.  

var i = 65; 

while (i <= 90){
    // String.FromCharCode() will convert ascii value into
    // alphabet, for uppercase ascii value start from 65 
    // for lowercase ascii value start from 65
    console.log(String.fromCharCode(i));
    i++;
}   

console.log("");

var i = 97;

while(i<=122){
    console.log(String.fromCharCode(i)); 
    i++;
}