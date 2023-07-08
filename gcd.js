var num1 = parseInt(prompt("enter number 1"));
var num2 = parseInt(prompt("enter number 2"));
var gcd;

if (num1 > num2) {
    alert("number 1 can't be greater than number 2");
}
else if (num2 % num1 == 0) {
    gcd = num1;
} else {
    for (i = 1; i <= num1; i++) {
        if (num1 % i == 0 && num2 % i == 0) {

            gcd = i;

        }
    }
}
console.log(gcd);