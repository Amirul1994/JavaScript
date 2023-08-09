var date_diff_indays = function (date1, date2) {
     
    let dt1 = new Date(date1); 
    let dt2 = new Date(date2); 

   /* The code snippet you provided calculates the UTC timestamp in milliseconds for the given date using Date.UTC() with the year, month, and date components. The resulting timestamp represents the start of that day in UTC. */

    let a = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()); 
    console.log(a);
    
    let b = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()); 
    console.log(b);
    
    /*subtract the UTC timestamps of the two dates and then divide by the number of milliseconds in a day (1000 milliseconds * 60 seconds * 60 minutes * 24 hours). This will give you the difference in days between the two dates.*/
    
    let c = (a - b)/(1000 * 60 * 60 * 24); 

    let e = (a - b)/(1000 * 60 * 60 * 24 * 365); 
    console.log(`The diffrence between two dates is ${e} years`);

    let d = Math.floor(c); 

    return d;

}; 

console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014')); 

console.log(date_diff_indays('04/02/2000', '11/04/2023')); 