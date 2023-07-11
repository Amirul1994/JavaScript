/* Write a JavaScript function that takes an array as 
a parameter and throws a custom 'Error' if the array is empty.*/  

function arr(a) { 

    // console.log(a);

    try {
        if (a = []) throw "empty array";
    } catch(b){
        console.log(b);
    }

}; 

arr([]) 

//var a = [];   

// another solution

function arr2(a, b) {

    try { 
        if (a.length == 0 || b.length == 0) throw "empty array";

    } 
    catch(c) {
        console.log(c);
    }

};

arr2([], [1,2,3])