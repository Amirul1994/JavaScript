function power_of_2(n) {
    if (typeof n !== 'number') 
         return 'Not a number'; 
   
/* ((n & (n - 1)) === 0) in the context of the code.

In binary representation, a power of 2 has only one bit set to 1, and all other bits are 0. For example:

2^0 = 1 (binary: 0001)
2^1 = 2 (binary: 0010)
2^2 = 4 (binary: 0100)
2^3 = 8 (binary: 1000)

When you subtract 1 from a power of 2, you get a binary number where all bits up to the power-of-2 position are 1, and all bits after that are 0. For example:

2^0 - 1 = 0 (binary: 0000)
2^1 - 1 = 1 (binary: 0001)
2^2 - 1 = 3 (binary: 0011)
2^3 - 1 = 7 (binary: 0111)

So, when you perform a bitwise AND operation between a power of 2 and its subtracted value, the result will be 0 because all the corresponding bits will be different.

In the expression ((n & (n - 1)) === 0):

(n & (n - 1)) calculates the bitwise AND of n and (n - 1).
If the result is 0, it means that n and (n - 1) have no common set bits, which happens only when n is a power of 2.
So, the expression (n & (n - 1)) === 0 serves as a check to determine whether n is a power of 2. If the expression evaluates to true, it means that n is a power of 2; otherwise, it's not.

Let's clarify the expression n && ((n & (n - 1)) === 0).

In JavaScript (and many programming languages), the && operator is a logical AND operator. It takes two operands and returns true if both operands are truthy. If the first operand is falsy, the second operand is not even evaluated because the result of the logical AND operation is already determined to be false. 

n is the first operand of the logical AND operation.
((n & (n - 1)) === 0) is the second operand.
If n is falsy (for example, if n is 0), the entire expression will evaluate to false, and the function will return false without evaluating the second operand.

If n is truthy (any non-zero number), then the second operand, ((n & (n - 1)) === 0), will be evaluated:

(n & (n - 1)) calculates the bitwise AND of n and (n - 1).
If the result of the bitwise AND is 0, then (n & (n - 1)) === 0 is true, meaning that n is a power of 2.
So, the entire expression n && ((n & (n - 1)) === 0) checks both if n is a non-zero number and if it satisfies the power of 2 condition. If both conditions are met, the expression evaluates to true; otherwise, it evaluates to false.

*/
       console.log(n & n-1);
       
       return (n && ((n & (n - 1)) === 0));
   }
   
   console.log(power_of_2(16));
   console.log(power_of_2(18));
   console.log(power_of_2(256));
   
/* The provided JavaScript code defines a function called power_of_2(n) that checks if a given number n is a power of 2. It does this by utilizing a bitwise operation and a mathematical property of powers of 2.

Let's break down how the code works:

typeof n !== 'number': This part of the code checks if the input n is not of type 'number'. If it's not a number, the function returns the string 'Not a number'.

(n & (n - 1)) === 0: This is the key part of the code where the power of 2 check happens. When a number is a power of 2, it has only one bit set in its binary representation (e.g., 2^0 = 1, 2^1 = 2, 2^2 = 4, 2^3 = 8, and so on). By subtracting 1 from a power of 2, all its bits become set up to the bit of the power of 2 itself.

For example:

2^3 (8) in binary: 1000
2^3 - 1 (7) in binary: 0111
Performing a bitwise AND operation (&) between a power of 2 and its predecessor (2^3 & (2^3 - 1)) will result in 0.

If the bitwise AND result is 0, it means that there's only one bit set in the binary representation of n, indicating that n is a power of 2. Otherwise, if the result is not 0, then n is not a power of 2.*/