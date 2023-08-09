let add_minutes = function (dt, minutes) {
     
    let a = dt.getTime() + minutes*60000; 
    let b = new Date(a) ; 
    return b; 

/* dt.getTime() returns the timestamp of the original date in milliseconds since January 1, 1970 (Unix epoch).

minutes * 60000 calculates the equivalent number of milliseconds in the given number of minutes. Since there are 60,000 milliseconds in a minute (60 seconds * 1000 milliseconds), this multiplication converts minutes to milliseconds.

Adding the result of the previous step to the original timestamp 
creates a new timestamp that represents the original date plus the specified number of minutes.

Finally, new Date(...) constructs a new Date object using the calculated timestamp.*/
} 

var d = add_minutes(new Date(2014,10,2), 30); 
var e = d.toString(); 
console.log(e);