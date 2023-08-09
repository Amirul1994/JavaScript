/* Write a JavaScript program that works 
as a regular expression trim function (string).*/   

function xtrm(str) {
    let result; 
    if (typeof str === 'string') {
        result = str.replace(/^\s+|\s+$/g, ''); 
        
        /* The regular expression /^\s+|\s+$/g used in the code is responsible for matching and replacing leading and trailing whitespace in a string. Let's break down the components of this regular expression:

^: This symbol represents the start of the string.

\s+: This part of the regular expression matches one or more whitespace characters (spaces, tabs, line breaks).

|: This is the alternation operator, used to indicate an "OR" relationship between different parts of the regular expression.

\s+$: This part of the regular expression matches one or more whitespace characters at the end of the string.

$: This symbol represents the end of the string.

/g: This is a flag that stands for "global." It indicates that the regular expression should be applied globally across the entire string, rather than stopping after the first match.

Putting it all together, the regular expression /^\s+|\s+$/g matches both leading and trailing whitespace in a string. Here's how it works:

/^\s+: Matches one or more whitespace characters at the start of the string.

|\s+$/: Matches one or more whitespace characters at the end of the string.

When applied globally with the /g flag, this regular expression effectively matches and selects all occurrences of leading and trailing whitespace in the string.  

In this line, the replace method is called on the string str. It takes two arguments:

The first argument is the pattern to search for. In this case, the pattern is the regular expression /^\s+|\s+$/g.

The second argument is the string to replace the matched pattern with. In this case, it's an empty string '', which means that the matched whitespace characters will be replaced with nothing.

So, the replace method will find all occurrences of leading and trailing whitespace in the input string str and replace them with an empty string, effectively removing them. The result of this operation is stored in the result variable.

*/
        
      return result;
    } 
    else 
    {
        return false;
    }
} 
console.log(xtrm(' w3resource '));