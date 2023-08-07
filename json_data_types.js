// https://jsonlint.com - validate json data 

// json supports 
// string, number, object (json object) 
// array, boolean, null 

// doesn't supprt 
// undefined, date, function

var person = {
    name: "amirul", 
    age: 30, 
    hometown: "noakhali", 
    married: false, 
    dob: "1994-7-29", 
    test_null: null, 
    test_undefined: undefined, 
    greet : function() {
        console.log(`Hello ${this.name}`);
    }

}; 


var person_json = JSON.stringify(person); 
console.log(person_json);