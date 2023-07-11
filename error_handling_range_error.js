/* Write a JavaScript program that uses a try-catch block to catch and 
handle a 'RangeError' when accessing an array with an invalid index. */ 
/*
var arr = [1, 2, 3, 4, 5]; 

for ( i = 0; i < arr.length; i++){
    try {
        var n ; 
        n[i]
    } catch(j) {

    }
} */

var arr = [1, 2, 3, 4, 5];   


try{
    let a = prompt("enter a value"); 

    if ( a >= arr.length) throw "invalid index"; 
    else if  (console.log(arr[a]));
} catch(n){
   console.log(n);
}