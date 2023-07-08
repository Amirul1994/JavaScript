var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum = sum + i * i;
    series = series + (i * i).toString();
    if (i == n) {
        continue;
    }
    series = series +  " + ";
}

console.log(`${series} = ${sum}`); 