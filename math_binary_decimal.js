function bin_to_dec(a) {
    let b = a.replace(/[^01]/gi,'');
    console.log(b); 
    
/* Certainly, the expression a.replace(/[^01]/gi, '') is used in the code to remove any characters from the input string a that are not '0' or '1'. Let's break down how this expression works:

a: This represents the input string that you provide when calling the function.

.replace(/[^01]/gi, ''): This is a method applied to the input string to perform a replacement based on the provided regular expression.

/[^01]/gi: This regular expression matches any character that is not '0' or '1'. Here's a breakdown of the components:

[^01]: This part of the regular expression is a character set enclosed in square brackets. The ^ symbol within the brackets indicates negation, meaning it will match any character that is not '0' or '1'.

/: The slashes at the beginning and end of the regular expression delimit it.

g: The g flag stands for "global," meaning it will match all occurrences in the string rather than stopping at the first match.

i: The i flag stands for "case-insensitive," so the regular expression will match characters regardless of their case.

'': This is the replacement value, which is an empty string. This means that any characters matching the regular expression will be replaced with nothing, effectively removing them from the string.

So, when you call a.replace(/[^01]/gi, ''), it will remove all characters from the input string a that are not '0' or '1', resulting in a cleaned binary string containing only '0' and '1' characters.*/


    let c = parseInt(b, 2); 
    console.log(c); 

/* The expression parseInt(b, 2) is used in the code to convert a binary string b into its decimal (base 10) equivalent. Let's break down how this expression works:

b: This represents the cleaned binary string that you obtained by removing non-binary characters from the input string using a.replace(/[^01]/gi, '').

parseInt(b, 2): This is a function call that takes two arguments:

The first argument b is the string you want to convert.
The second argument 2 specifies the base of the input string. In this case, 2 indicates that the input string b is in binary representation.

The parseInt function is a built-in JavaScript function that converts strings representing numbers in different bases (such as binary, octal, or hexadecimal) into their decimal (base 10) equivalent. By using the 2 as the base argument, you are telling the function that the input string b should be interpreted as a binary number.

For example, if b is the string "10101", using parseInt(b, 2) will convert the binary representation "10101" into its decimal equivalent, which is 21.

So, when you call parseInt(b, 2) on your cleaned binary string, it converts the binary string to a decimal number based on the binary value of the string.*/

}
     

bin_to_dec("5100h70j"); 
console.log(""); 

bin_to_dec("t5100h70");