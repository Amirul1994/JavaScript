/* Write a JavaScript function that takes a number as a parameter 
and throws a custom 'Error' if the number is not an integer*/ 

/*
function num(a) {
   try { 
     let b = isNaN;
     if ( a == b ) throw " value of a is not a number";
     else throw " value of a is a number";
   } catch(h) {
    console.log(h);
   }
};

num(5) */  


function checknumber(a) { 

    try {
        if (Number.isInteger(a) == true) throw "value of a is integer"; 
        else throw "value of a is not integer";
    } catch(h) {
        console.log(h);
    }

}; 

checknumber(7);