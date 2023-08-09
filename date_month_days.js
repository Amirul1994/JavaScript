var getDaysInMonth = function (month,year) {
   
    /* new Date(year, month, 0) creates a new Date object with the given year and month, but with a day of 0. Since days are 1-based, using day 0 will go back to the last day of the previous month. */
   
    var a = new Date(year, month, 0); 
    console.log(a); 

    /* .getDate() then retrieves the day of the month from the date object, which will be the last day of the previous month. This effectively gives you the number of days in the specified month. */
    
    var b = a.getDate(); 
    console.log(b); 

    return b; 
};  


console.log(getDaysInMonth(1, 2012)); 
console.log(getDaysInMonth(2, 2012)); 
console.log(getDaysInMonth(9, 2012)); 