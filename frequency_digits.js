// write a program to find frquency of each digit 
// in a given number 

var number = "67854218970";
var count = {};

for (var digit = 0; digit <= 9; digit++) {

    count[digit] = 0;

    for (var i = 0; i < number.length; i++) {
        currentDigit = parseInt(number[i]);

        if (currentDigit == digit) {
            count[digit]++;
        }
    }
}
console.log(count);  

for (var x in count){
    console.log ( `${x} is ${count[x]} time`);
}