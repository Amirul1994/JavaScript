/* format of some well-known credit cards.

American Express :- Starting with 34 or 37, length 15 digits.
Visa :- Starting with 4, length 13 or 16 digits.
MasterCard :- Starting with 51 through 55, length 16 digits.
Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits */

/* The (?: ... ) construct in regular expressions is used to create a non-capturing group. Let's delve into its functionality:

( ... ) - Parentheses in regular expressions are used to create capturing groups. When a capturing group is used, the matched portion of the input string that corresponds to that group is saved and can be accessed later using match groups or backreferences.

(?: ... ) - On the other hand, (?: ... ) creates a non-capturing group. This means that the pattern inside the parentheses is treated as a group for purposes of applying quantifiers (like *, +, ?, etc.) or alternation (|), but it doesn't create a separate match group that can be accessed afterward.

In simpler terms, a non-capturing group is used when you want to group parts of your regular expression for logical or quantifier purposes, but you don't intend to use the matched content of that group later in your code. This can help improve performance and reduce unnecessary memory usage when using regular expressions.

In the context of your provided credit card validation function, (?: ... ) is used to create non-capturing groups within the larger regular expression. This is done to structure the regular expression pattern according to the various card formats you're trying to match, while avoiding unnecessary capturing of specific parts of the matched text.*/


function creditcard(str) {
    let regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

/* (?:(4[0-9]{12}(?:[0-9]{3})?)). This portion is a non-capturing group that's designed to match Visa card numbers, and it's part of the larger regular expression for credit card validation.

Let's break down this specific part:

(?: ... ) - This is a non-capturing group in regular expressions. It's used to group patterns together without capturing the matched text.

4 - This matches the digit 4, which is the starting digit for Visa card numbers.

[0-9]{12} - This matches exactly 12 digits (0-9) after the initial digit 4. This represents the main account number of the Visa card.

(?:[0-9]{3})? - This is another non-capturing group within the first group. It matches an optional sequence of 3 additional digits. The ? at the end makes this part optional.

So, when you put it all together, (?:(4[0-9]{12}(?:[0-9]{3})?)) matches Visa card numbers with a total length of either 13 (without the optional 3 digits) or 16 (with the optional 3 digits), ensuring that they start with a 4 and follow the specified format for Visa cards. The use of the non-capturing group (?: ... ) is to group the patterns together for matching purposes without capturing them as separate match groups.

I apologize for any misunderstanding, but it appears you've isolated the vertical bar (|) without context. The vertical bar is a special character in regular expressions that indicates alternation. It is used to specify multiple alternative patterns that the regular expression engine can match.

For example, in the context of your credit card validation regular expression:

/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|...)$/

The vertical bars separate different card types (Visa, MasterCard, etc.), allowing the regular expression to match any one of these card types based on the pattern. Each part separated by the vertical bar represents an alternative pattern that corresponds to a specific card type.

(5[1-5][0-9]{14}) - This part of the regular expression matches credit card numbers that correspond to the MasterCard format. Let's break it down further:

5 - Matches the digit 5, which is the starting digit for MasterCard card numbers.
[1-5] - This character class matches any single digit from 1 to 5. This represents the second digit in the MasterCard number.
[0-9]{14} - This matches exactly 14 digits (0-9) after the first two digits. This represents the main account number of the MasterCard.
So, when the regular expression encounters this part |(5[1-5][0-9]{14}), it is looking for MasterCard card numbers that start with a 5, followed by a second digit from 1 to 5, and then followed by 14 more digits. The vertical bar (|) before this part indicates that this alternative pattern should be matched if the previous patterns in the regular expression are not matched.

This part of the regular expression matches MasterCard card numbers that have a total length of 16 digits, as specified in the MasterCard format. 

Certainly, let's break down the part (6(?:011|5[0-9]{2})[0-9]{12}) of the regular expression:

(6 ... ) - This is a capturing group that matches the beginning of the credit card number that corresponds to the Discover card format.

?: - This is a non-capturing group indicator. It tells the regular expression engine not to capture the content of this group for later use. In this context, it's used to improve performance by avoiding unnecessary memory allocation for the capturing of subgroups.

(?:011|5[0-9]{2}) - This is the non-capturing subgroup within the larger capturing group. It matches either of the following two patterns:

011 - Matches exactly the string "011". This is part of the Discover card format.
5[0-9]{2} - Matches the digit 5 followed by any two digits. This corresponds to the Discover card numbers that start with 5 and are followed by two additional digits.
[0-9]{12} - Matches exactly 12 digits (0-9) after the initial part. This represents the main account number of the Discover card.

Putting it all together, (6(?:011|5[0-9]{2})[0-9]{12}) matches Discover card numbers that start with either "6011" or "5" followed by two digits, and then have an additional 12 digits, for a total length of 16 digits. This pattern corresponds to the specified format for Discover credit cards. 

Certainly, let's break down the part (3[47][0-9]{13}) of the regular expression:

(3[47][0-9]{13}) - This part of the regular expression matches credit card numbers that correspond to the American Express format.

3 - Matches the digit 3, which is the starting digit for American Express card numbers.

[47] - This character class matches either 4 or 7. It corresponds to the second digit of American Express card numbers.

[0-9]{13} - Matches exactly 13 digits (0-9) after the first two digits. This represents the main account number of the American Express card.

In essence, (3[47][0-9]{13}) matches American Express card numbers that start with a 3 followed by either a 4 or 7 as the second digit, and then have an additional 13 digits. This pattern corresponds to the specified format for American Express credit cards.

(3(?:0[0-5]|[68][0-9])[0-9]{11}) of the regular expression:

(3(?:0[0-5]|[68][0-9])[0-9]{11}) - This part of the regular expression matches credit card numbers that correspond to the Diners Club format.

(3 ... ) - This is a capturing group that matches the beginning of the credit card number that belongs to the Diners Club format.

?: - This is a non-capturing group indicator, which indicates that the content within this group should not be captured for later use.

(?:0[0-5]|[68][0-9]) - This non-capturing subgroup within the larger capturing group matches either of the following two patterns:

0[0-5] - This matches a digit 0 followed by a second digit from 0 to 5. This covers the Diners Club card numbers that start with 30 to 35.
[68][0-9] - This matches either 6 or 8 as the first digit, followed by any digit 0-9. This covers the Diners Club card numbers that start with 36-38 and 60-89.
[0-9]{11} - This matches exactly 11 digits (0-9) after the first part. This represents the main account number of the Diners Club card.

In summary, (3(?:0[0-5]|[68][0-9])[0-9]{11}) matches Diners Club card numbers that start with 30-35, 36-38, or 60-89 as the first two digits, followed by 11 additional digits. This pattern corresponds to the specified format for Diners Club credit cards.

Certainly, let's break down the final part ((?:2131|1800|35[0-9]{3})[0-9]{11}))$ of the regular expression:

((?:2131|1800|35[0-9]{3})[0-9]{11}))$ - This part of the regular expression matches credit card numbers that correspond to the JCB format.

(( ... ))$ - This is a capturing group that encompasses the entire pattern for JCB card numbers. The final $ ensures that the entire credit card number should match the pattern until the end of the string.

(?: ... ) - This is a non-capturing group within the larger capturing group that groups alternative patterns together.

(?:2131|1800|35[0-9]{3}) - This non-capturing subgroup within the larger capturing group matches any of the following patterns:

2131 - This matches exactly the string "2131".
1800 - This matches exactly the string "1800".
35[0-9]{3} - This matches "35" followed by any three digits. This corresponds to JCB card numbers that start with 35 and are followed by three additional digits.
[0-9]{11} - This matches exactly 11 digits (0-9) after the first part. This represents the main account number of the JCB card.

In summary, ((?:2131|1800|35[0-9]{3})[0-9]{11}))$ matches JCB card numbers that start with 2131, 1800, or 35 followed by three digits, and then have an additional 11 digits. This pattern corresponds to the specified format for JCB credit cards. The outermost capturing group captures the entire JCB card number for further use.
*/



if (regexp.test(str)) {
    return true;
}
else {
    return false;
}
}; 

console.log(creditcard("378282246310006")); 

console.log(creditcard("37828224630006"));  


/*
(4[0-9]{12}(?:[0-9]{3})?) - Matches Visa card numbers. It starts with a 4, followed by 12 digits, and optionally followed by 3 more digits.
(5[1-5][0-9]{14}) - Matches MasterCard card numbers. It starts with 51 to 55, followed by 14 digits.
(6(?:011|5[0-9]{2})[0-9]{12}) - Matches Discover card numbers. It starts with 6011 or 5 followed by two digits (50-59), followed by 12 digits.
(3[47][0-9]{13}) - Matches American Express card numbers. It starts with 34 or 37, followed by 13 digits.
(3(?:0[0-5]|[68][0-9])[0-9]{11}) - Matches Diners Club card numbers. It starts with 300-305, 36, or 38, followed by 11 digits.
((?:2131|1800|35[0-9]{3})[0-9]{11}) - Matches JCB card numbers. It starts with 2131 or 1800, or starts with 35 followed by three digits, followed by 11 digits. */