/* Write a pattern that matches e-mail addresses.
The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.

Digits (0-9).

Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~

Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other. */   


function valid_email(str) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    
/* The regular expression ^\w+([\.-]?\w+)* appears to be another partial pattern that matches the username part of an email address. Let's break down this regular expression:

^: Anchors the match to the start of the string, indicating that the pattern should start matching from the beginning of the string.

\w+: Matches one or more word characters (letters, digits, or underscores). This is used to match the initial part of the username.

([\.-]?\w+)*: This is a capturing group that matches the rest of the username. It has two components:

[\.-]?: This part matches an optional period (.) or hyphen (-). This allows for usernames like john.doe or jane-smith.
\w+: This part matches one or more word characters, allowing for the continuation of the username after the optional period or hyphen.
*: This is a quantifier that specifies zero or more occurrences of the preceding group. It allows for flexibility in matching variations of the username.

So, when combined, ^\w+([\.-]?\w+)* matches a username that starts with one or more word characters, optionally followed by periods or hyphens, and then followed by one or more word characters. This pattern is designed to match email addresses where the username can have complex formats with periods and hyphens. 

The regular expression @\w+([\.-]?\w+)* appears to be a pattern that matches the domain part of an email address. Let's break down this regular expression:

@: Matches the "@" symbol that separates the username from the domain.

\w+: Matches one or more word characters (letters, digits, or underscores). This is used to match the initial part of the domain name.

([\.-]?\w+)*: This is a capturing group that matches the rest of the domain name. It has two components:

[\.-]?: This part matches an optional period (.) or hyphen (-). This allows for domain names like example.com or my-domain.net.
\w+: This part matches one or more word characters, allowing for the continuation of the domain name after the optional period or hyphen.
*: This is a quantifier that specifies zero or more occurrences of the preceding group. It allows for flexibility in matching variations of the domain name. 

The regular expression (\.\w{2,3})+$ is used to match the top-level domain (TLD) part of an email address. Let's break down this regular expression:

( and ): These parentheses are used to create a capturing group that contains the pattern inside them. This allows you to capture and extract the matched TLD.

\.: This matches a literal period (.) character. Since the period is a special character in regex, it needs to be escaped with a backslash to match a literal period.

\w{2,3}: This matches between 2 and 3 word characters (letters, digits, or underscores). This is typically used to match the TLD like "com", "net", "org", etc. The {2,3} quantifier specifies that the TLD must have 2 or 3 characters.

+: This is a quantifier that specifies one or more occurrences of the preceding group. It indicates that the TLD can consist of multiple consecutive sequences of \.\w{2,3}.

$: Anchors the match to the end of the string, indicating that the pattern should match until the end of the string.

When combined, (\.\w{2,3})+$ matches the TLD part of an email address. For example, it would match .com, .net, .org, .co.uk, and similar TLDs.

*/

    if (mailformat.test(str)){
        console.log("valid email address");
    }else {
        console.log("you have enetered an invalid email address");
    }
} 

valid_email('me-in_fn87@example.com.bd'); 

/* The JavaScript code you've provided defines a function valid_email(str) that checks whether a given email address is valid according to a regular expression pattern. Let's break down the code and its functionality:

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
This line defines a regular expression pattern called mailformat to match email addresses. The pattern breaks down as follows:

^\w+([\.-]?\w+)*: Matches the username part of the email address, which starts with one or more word characters (letters, digits, or underscores), followed by optional periods or hyphens and more word characters. This allows for complex usernames like me-in_fn87.
@: Matches the "@" symbol that separates the username from the domain.
\w+([\.-]?\w+)*: Matches the domain name part of the email address, which starts with one or more word characters, followed by optional periods or hyphens and more word characters.
(\.\w{2,3})+: Matches the top-level domain (TLD) part of the domain name, such as ".com" or ".org". The TLD must consist of 2 to 3 word characters.
$: Represents the end of the string.
The if condition checks whether the provided str matches the mailformat pattern using the .test() method of the regular expression object.

If the condition is true (i.e., the email address matches the pattern), the function logs "valid email address" to the console.

If the condition is false (i.e., the email address doesn't match the pattern), the function logs "you have entered an invalid email address" to the console.

Finally, the function valid_email('me-in_fn87@example.com'); is called with the email address 'me-in_fn87@example.com' as an argument. The function will output "valid email address" because the provided email address matches the regular expression pattern. */