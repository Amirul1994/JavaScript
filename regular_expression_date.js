/*Write a JavaScript program to search 
a date within a string.*/  

var a = "this is a date: 17/7/"; 

var b = /([1-31]{1})\/([1-12]{1})\//;

if (b.test(a)){
    console.log("this is a date");
}