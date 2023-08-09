function lcm(arr) { 
/* In JavaScript, the toString.call() method is used to get the internal [[Class]] property of an object. However, it's important to note that using toString.call() is a bit unconventional for type checking in modern JavaScript. Instead, the Array.isArray() method is recommended for checking whether a variable is an array.

Here's the correct way to perform the type check using Array.isArray():

if (!Array.isArray(arr)) {
    return false;
}

This code checks if arr is not an array using the Array.isArray() method. If it's not an array, it returns false, indicating that the input is not valid. If arr is an array, the condition will be false, and the code won't enter the if block.

Using Array.isArray() is a more straightforward and reliable way to check if a variable is an array compared to using toString.call().*/
     
    if (!Array.isArray(arr)) {
        return false;
     } 

     var lcm = arr[0]; 

     for (let i = 1; i < arr.length; i++) {
        lcm = (lcm * arr[i]) / gcd(lcm, arr[i]); 
     } 

     return lcm;
}; 

/* The function gcd(a, b) you provided is an implementation of the greatest common divisor (GCD) calculation using the Euclidean algorithm, a well-known and efficient method for finding the GCD of two numbers. The algorithm relies on the fact that the GCD of two numbers doesn't change if you replace the larger number by its remainder when divided by the smaller number.

Here's how the function works:

The function takes two arguments, a and b, which are the two numbers for which you want to find the GCD.

Inside the function, there's a base case check: if b is equal to 0, then the GCD is found. The GCD of a and 0 is simply a. So, the function returns a.

If b is not equal to 0, the function uses recursion. It calls itself with b as the new value of a and a % b (the remainder of a divided by b) as the new value of b. This step repeats until b becomes 0.

The recursive step is key to the Euclidean algorithm. The function keeps reducing the problem into simpler and smaller cases until it reaches the base case of b being 0.

Once the base case is reached, the function starts returning the intermediate GCD values obtained during the recursive calls, which eventually gives the overall GCD of a and b. */

function gcd(a, b) {
    if (b === 0) {
        return a; 
    } 

    return gcd(b, a%b);
}

console.log(lcm([100,90,80,7]));