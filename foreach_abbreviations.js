// using forEach, copy only the first 2 characters 
// of each string in the days array and store the abbreviations
// in the dayAbbreviations array  


var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var dayAbbreviations = [];

var days2 = function (item, index) {

    var a = item.slice(0, 2);
    console.log(a);

    for (i = 0; i < days.length; i++) {

        dayAbbreviations[index] = a;

    }

};

days.forEach(days2);

console.log(dayAbbreviations);