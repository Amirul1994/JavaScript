// the split method turns a string into an array. 
// in the case of alphabet below, each letter of the string
// is being turned into an element in an array by split. 
// using forEach, iterate over the alphabet array and store 
// each letter in the array noel except for the L character. 

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var noel2 = [];

for (var i = 0; i < alphabet.length; i++) {
  var letter = alphabet[i];
  if (letter !== 'L') {
    noel2.push(letter);
  }
  console.log(letter);
}

console.log(noel2);