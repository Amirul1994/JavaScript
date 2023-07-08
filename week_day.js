// Write a C program to input week number and print week day. 

var day = prompt("Enter number"); 

if (day == ""){
    console.log("Empty Field"); 
}
else if(day == 1){
    console.log("Friday");
}else if (day == 2){
    console.log("Saturday"); 
}else if ( day == 3){
    console.log("Sunday"); 
}else if ( day == 4 ){
    console.log("Monday");
}else if ( day == 5 ){
    console.log("Tuesday"); 
}else if (day == 6){
    console.log("Wednesday"); 
}else if (day == 7){
    console.log("Thursday")
}else {
    console.log("Invalid number"); 
}