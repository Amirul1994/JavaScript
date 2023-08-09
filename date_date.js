var is_date = function (input) {
    if (Object.prototype.toString.call(input) === "[object Date]" ) {
        return true;
    } 

    else {
        return false; 
    }
} 

console.log(is_date("October 13, 2014 11:13:00")); 
console.log(is_date(new Date(86400000))); 
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0))); 
console.log(is_date([1, 2, 4, 0])); 

/* The provided code defines a JavaScript function is_date that checks whether the input is of type Date. It uses the Object.prototype.toString.call method to determine the object's internal [[Class]] property, and if it matches the string "[object Date]", then the function returns true, indicating that the input is a Date object. Otherwise, it returns false.

Here's a breakdown of the code and its output for each input:

console.log(is_date("October 13, 2014 11:13:00"));

Output: false
Explanation: The input is a string, not a Date object. The function checks the internal [[Class]] property, which is "[object String]", so it returns false.
console.log(is_date(new Date(86400000)));

Output: true
Explanation: The input is a valid Date object created using the Date constructor. The function checks the internal [[Class]] property, which is "[object Date]", so it returns true.
console.log(is_date(new Date(99,5,24,11,33,30,0)));

Output: true
Explanation: Similar to the previous example, this is another valid Date object created using the Date constructor. The function checks the internal [[Class]] property, which is "[object Date]", so it returns true.
console.log(is_date([1, 2, 4, 0]));

Output: false
Explanation: The input is an array, not a Date object. The function checks the internal [[Class]] property, which is "[object Array]", so it returns false.*/