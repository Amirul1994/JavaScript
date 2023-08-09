function is_dateString(str)
{
 let regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/; 

 /* The regular expression pattern ^(1[0-2]|0?[1-9]) is used to match the month portion (MM) of a date in the MM/DD/YYYY format. Let's break down the components of this part of the regular expression:

^: This symbol indicates the start of the string. The regular expression will start matching from the beginning of the input string.

(1[0-2]|0?[1-9]): This part is a grouping that contains two alternatives separated by the vertical bar |.

1[0-2]: This part matches months from 10 to 12. The 1[0-2] pattern means that the month starts with "1" followed by any digit from 0 to 2, so it matches months 10, 11, and 12.

0?[1-9]: This part matches single-digit months from 1 to 9. The 0? makes the preceding "0" optional, and [1-9] matches any digit from 1 to 9.

The combination of these two alternatives allows the regular expression to match valid months in the range of 01 to 12 or single-digit months from 1 to 9.

So, the pattern ^(1[0-2]|0?[1-9]) in the regular expression ensures that the month portion of the date is valid and falls within the specified range. 

The regular expression pattern \/(3[01]|[12][0-9]) is used to match the day portion (DD) of a date in the MM/DD/YYYY format. Let's break down the components of this part of the regular expression:

\/: This part simply matches the forward slash character / that separates the month and day portions of the date.

(3[01]|[12][0-9]): This part is a grouping that contains two alternatives separated by the vertical bar |.

3[01]: This part matches days 30 and 31. The 3[01] pattern means that the day starts with "3" followed by either "0" or "1", so it matches days 30 and 31.

[12][0-9]: This part matches days from 10 to 29. The [12] means the day starts with either "1" or "2", followed by any digit from 0 to 9, so it matches days 10 to 29.

The combination of these two alternatives allows the regular expression to match valid days in the range of 01 to 31. It takes into account the varying number of days in different months.

So, the pattern \/(3[01]|[12][0-9]) in the regular expression ensures that the day portion of the date is valid and falls within the specified range for different months.

The regular expression pattern |0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$ is the continuation of the regular expression for validating the day and year portions of a date in the MM/DD/YYYY format. Let's break down the components of this part of the regular expression:

|0?[1-9]): This part is the continuation of the day matching portion. It matches single-digit days from 1 to 9. The 0? makes the preceding "0" optional, and [1-9] matches any digit from 1 to 9. This part ensures that single-digit days are properly handled.

\/: This matches the forward slash character / that separates the day and year portions of the date.

(?:[0-9]{2})?: This is a non-capturing group (?: ... )? that matches a two-digit year (YY). The (?: ... ) is used for grouping without capturing the matched content. The [0-9]{2} matches any two digits.

[0-9]{2}$: This matches a two-digit year (YY) at the end of the string. This ensures that the year portion is either a two-digit or four-digit year.

In summary, the entire regular expression pattern ^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$ is used to validate a date string in the MM/DD/YYYY format. It breaks down the validation into three parts: month, day, and year. The pattern ensures that each part of the date string is correctly formatted and falls within the appropriate ranges.

*/
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_dateString("01/01/2015"));

console.log(is_dateString("01/22/2015"));

console.log(is_dateString("32/01/2015"));
