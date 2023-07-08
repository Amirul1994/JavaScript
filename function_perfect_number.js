// perfect number : the number which is equal to the 
// sum of its divisor 
// 6 = 1+2+3  

function perfectNumber(number) {

    var sum = 0;

    for (i = 1; i < number; i++) {

        if (number % i == 0) {
            sum += i;

            if (sum == number) {
                console.log("the number is perfect");

            }
            else {
                continue;
            }
        }

    }
}

perfectNumber(prompt("enter number"))