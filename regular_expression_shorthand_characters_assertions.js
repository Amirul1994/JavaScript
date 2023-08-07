let re; 
let str; 

// shorthand character classes 
// for shorthand characters use '\' before the shorthand character

// w - word character 
// w indicates alphabet, numeric and '_' 
// it will match if 
// it will find alphabet, numeric and '_' 

re = /\w/; 


// \w+ means - find the first alphanumeric character and then check the 
// next character and if it is alphanumeric then include it in the match too, 
//  repeat until you run into a non-alphanumeric character.

re = /\w+/; 

// \W : special characters - #,%,@,$ etc. 
re = /\W/;  

// \W+ means - find the first special character and then check the 
// next character and if it is special character then include it in the match too, 
//  repeat until you run into a non-special character.

re = /\W+/; 

re = /\d/; // for digit character

// \d+ means - find the first digit character and then check the 
// next character and if it is digit character then include it in the match too, 
//  repeat until you run into a non-digit character.

re = /\d+/;  

re = /\D/; // non-digit character

// \D+ means - find the first non-digit character and then check the 
// next character and if it is non-digit character then include it in the match too, 
//  repeat until you run into a digit character.

re = /\D+/;

re = /\s/; // match white space 

re = /\S/; // doesn't match if there is no character in the string 

// \b - word boundary- it will check if there is something
// before or after the string including white space
// if there is something it won't match, otherwise match
re = /Hello\b/;


re = /\bHello\b/; 






str = "(*&^";
str = "(*&^y"; 
str = "(*&^y8"; 
str = "(*&v^yhushfudskl8"; 
str = "aksdhakshdakshd_8"; 
str = "aksdhakshdakshd_8*&"; 
str = "asdasdasd&"; 
str = "jajdg78";
str = "asdasdasd"; 
str = "78654"; 
str = "asdasdastg798"; 
str = "asdasd k"; 
str = ""; 
str = " "; 
str = "Hello"; 
str = ""; 
str = "Hello78"; 
str = "Hello 78"; 
str = "Hello78 jkjl"; 
str = "Hello 78 jkjl";
str = " Hello 78 jkjl";
str = "yHello 78 jkjl"; 





reTest(re, str);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    } 
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
} 


// Assertions 
let re2 = /x(?=y)/; // matches x only if x is before y 
re2 = /x(?=yz)/; 

re2 =/x(?!yz)/; // matches x only if x is not before yz 


let str2 = "asdxasd"; 
str2 = "asdxyasd"; 
str2 = "sdadsxasdsa"; 
str2 = "sdadsxyzasdsa"; 
str2 = "asdaxsds";
str2 = "asdaxyzsds";




reTest(re, str);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    } 
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}  

reTest(re2, str2);