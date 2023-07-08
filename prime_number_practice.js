var num = prompt("enter number");
num = parseInt(num);
var isPrime = true;

if (num > 1) {

    for (let a = 2; a < num; a++) {
        if (num % a == 0) {
            isPrime = false; 
            console.log(isPrime);
        }
    }

    if (isPrime == true) {
        //console.log(isPrime);
        console.log(`${num} is a prime number`);
    } else {
        //console.log(isPrime);
        console.log(`${num} is not a prime number`);
    }
}
else {
    console.log("number can't be 1 or zero or empty or negative");
} 