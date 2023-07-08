// An Armstrong number is one whose sum of digits 
//raised to the power three equals the number itself. 
//371, for example, is an Armstrong number because 3**3+7**3+1**3= 371

function armstrongNumber(number) { 

    var digit = 0;

    for (i = 0; i < number.length; i++) {
        digit++;

    }

    //console.log(digit); 

    var c = digit;
    sum = 0;

    for (i = 0; i < number.length; i++) {
        sum = sum + number[i] ** c;
    }
    //console.log(sum);
    return sum;
} 


var a = prompt("enter number");

armstrongNumber(a)

//console.log(armstrongNumber(a)); 

var b = armstrongNumber(a);

if (b == a) {
    console.log("the number is armstrong number");
} else {
    console.log("the number is not armstrong number");
}  