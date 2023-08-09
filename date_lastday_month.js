var lastday = function(y, m) {
    
    /* var a = new Date(y, m+1, 0);: This line creates a new Date object, specifying the year y, the month m+1 (note that months are zero-based in JavaScript, so you need to add 1), and the day 0. When the day is set to 0, it refers to the last day of the previous month, effectively giving you the last day of the desired month.*/
    
    var a = new Date(y, m+1, 0); 
    console.log(a);
    
    var b = a.getDate(); 
    
    /* return b;: The function returns the last day of the specified month. */
    return b;
}; 

console.log(lastday(2014, 0)); 
console.log(lastday(2014, 1));
console.log(lastday(2014, 11));