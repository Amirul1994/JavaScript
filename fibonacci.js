var n = prompt("enter steps number");
var f = {};

for (var i = 1; i <= n; i++) {

    if (i == 1) {

        f[i] = 1;
        console.log(f);
    }
    else if (i == 2) {

        f[i] = 1;
        console.log(f);
    }
    else {

        f[i] = f[i - 1] + f[i - 2];
        console.log(f[i]);
        console.log(f);
    }
}

for (var x in f) {
    console.log(`for position ${x} fibonacci series value is ${f[x]}`);
}  