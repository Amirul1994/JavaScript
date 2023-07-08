var num = `first number is 10
second number is 11
third number is 12 `;  

var a = prompt("type 10 or 11 or 12"); 

switch (a){
    case "10" :
        output = console.log("you typed 10");
        break; 
    
    case "11" :
        output = consol.log("you typed 11");
        break; 
    
    case "12" : 
         output = console.log("you typed 12");
         break; 
    
    default : 
       console.log("you typed other number");
}