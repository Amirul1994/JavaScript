function findGCD(a, b) { 
    console.log(a,b);
    if (b === 0) {
        console.log(a);
        console.log(b);
        return a; 
    } 
    console.log(a,b);
    console.log("");
    var z = findGCD(b, a%b);
    console.log(z);
    return z;
} 

function findMultipleGCD(numbers) {
    if (numbers.length < 2) {
        throw new Error("at least two numbers are required"); 
    } 

    let gcd = numbers[0]; 
    console.log(gcd);
    
    for (let i = 1; i < numbers.length; i++) {
        console.log(`${gcd} ${numbers[i]}`);
        gcd = findGCD(gcd, numbers[i]); 
        console.log(gcd);
    } 
    console.log(gcd);
    return gcd;
} 

//const numbers = [0, 11, 72, 96]; 
let numbers2 = [12, 24, 30, 45];

//const result = findMultipleGCD(numbers); 
const result2 = findMultipleGCD(numbers2); 

//console.log(`the gcd of ${numbers.join(',')} is: ${result}`);

console.log(`the gcd of ${numbers2.join(',')} is: ${result2}`); 


/* 
The code snippet you've posted is the core logic of the findGCD function. This function calculates the Greatest Common Divisor (GCD) of two numbers a and b using the Euclidean algorithm. Here's a breakdown of what it does:

The base case: It checks if b is equal to 0. If b is 0, it means that a is the GCD of the two numbers (since any number's GCD with 0 is itself). So, the function returns a.

If b is not 0, the function recursively calls itself with the arguments b and a % b. Here, a % b calculates the remainder of the division of a by b. This recursive step helps in finding the GCD by iteratively reducing

The code snippet you've posted is the core logic of the findMultipleGCD function. Here's a breakdown of what it does:

It checks whether the numbers array has at least two elements. If not, it throws an error, as you cannot find the GCD of a single number or an empty array.

It initializes the variable gcd with the first number in the array (numbers[0]). This serves as the initial value for finding the GCD.

It then iterates through the remaining numbers in the array using a for loop, starting from index 1 (let i = 1). For each iteration, it updates the gcd value by calling the findGCD function with the current gcd value and the number at the current index (numbers[i]).

Finally, after iterating through all the numbers, it returns the calculated GCD value.

The result is the GCD of all the numbers in the numbers array. 
*/ 