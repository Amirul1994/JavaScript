// class (ES6) 
// class is a template for creating object 

/*
let person1 = {
    firstname: "imam", 
    lastname: "muhammad", 
    dob: "29-07-1994", 

    fullname: function(){
        console.log(`${this.firstname} ${this.lastname}`); 
    }
} 


let person2 = {
    firstname: "amirul", 
    lastname: "maula", 
    dob: "29-07-1993", 

    fullname: function(){
        console.log(`${this.firstname} ${this.lastname}`);
    }
} 


console.log(person1); 
console.log(person2); 
*/


// if I need more objects, I have to declare object just like doing above
// class is the blueprint for making objects of same type, same property and same method   


// name of the class always starts with capital letter 

class Person {
      constructor() {
        this.firstname = "imam"; 
        this.lastname = "muhammad"; 
        this.dob = "29-07-1994";
      }
}  


let person1 = new Person(); 
let person2 = new Person(); 
let person3 = new Person();


console.log(person1);
console.log(person2); 
console.log(person3); 

console.log("");


class Person2 {
    constructor(fname, lname, birthday) {
           this.firstname = fname; 
           this.lastname = lname; 
           this.dob = birthday; 
    } 


} 


let person4 = new Person2("imam", "muhammad", "29-07-1994"); 
let person5 = new Person2("amirul", "maula", "29-07-1993"); 
let person6 = new Person2("amirul", "brinto", "29-07-1994"); 


console.log(person4); 
console.log(person5); 
console.log(person6);   

console.log("");  

class Person3 {
    constructor(fname, lname, birthday) {
           this.firstname = fname; 
           this.lastname = lname; 
           this.dob = birthday; 
    } 

    calculateAge() {
        let birthday = new Date(this.dob); 
        //console.log(birthday);
        let diff = Date.now() - birthday.getTime(); 
        //console.log(diff);
        let ageDate = new Date(diff);
        //console.log(ageDate); 
        //console.log(Math.abs(ageDate.getUTCFullYear() - 1970));
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    fullname() {
        console.log (this.firstname, this.lastname);
    };
    
    fullname2() {
        return `${this.firstname} ${this.lastname}`;
    };
} 


let person7 = new Person3("imam", "muhammad", "07-29-1994"); 
let person8 = new Person3("amirul", "maula", "07-29-1993"); 
let person9 = new Person3("amirul", "brinto", "07-29-1994"); 


console.log(person7.calculateAge()); 
console.log(person8.calculateAge()); 
console.log(person9.calculateAge());  

console.log(""); 

console.log(person7.fullname()); 
console.log(person8.fullname()); 
console.log(person9.fullname()); 

console.log(""); 

console.log(person7.fullname2()); 
console.log(person8.fullname2()); 
console.log(person9.fullname2());