// method - if a function is included in the object, that is called method

let person = {
    firstname: "amirul", 
    lastname: "maula", 
    dob: "29-07-1994", 

    // object's property value: number, string, date, array, object, function 

// 'this' keyword has to be used if a function is declared 
// as the property value in an object 
    
    fullname: function(){ // method
        return `${this.firstname} ${this.lastname}`;
    }

} 

console.log(person.firstname); 
console.log(person.fullname);
console.log(person.fullname());   


// javascript considers everything as an object 

let str = "Bohubrihi"; 
console.log(str.length); 
console.log(str.split()); 