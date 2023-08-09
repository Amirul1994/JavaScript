/*  Write a JavaScript function to get the month name from a particular date. */ 

var month_name = function(dt) {
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];  
   
    let a = dt.getMonth(); 
    console.log(a); 

    let b = mlist[a]; 
    console.log(b); 

    return b; 

};

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));