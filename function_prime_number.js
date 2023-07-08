function primeNumber() {

    var number = prompt("enter number");

    var a;
    var prime = true;

    if (a = isNaN(number)) {

        console.log("enter number only");
    }
    else {
        if (number > 1) {

            for (i = 2; i <= number; i++) {
                if (number % 2 == 0) {
                    prime = false;
                }
            }

            if (prime) {
                console.log('the number is prime number');
            } else {
                console.log('the number is not prime number');
            }
        } else {
            console.log("number can't be 0 or 1 or empty");
        }
    }
}

primeNumber()