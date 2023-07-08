// for regular function has to be accessed from object
// static function has to be accessed from class

class Person {
    constructor(fname,lname) {
        this.firstname = fname; 
        this.lastname = lname; 
    }
    
    greeting() {
        console.log (`hello ${this.firstname} ${this.lastname}`); 
    }
    
    static test() {
        console.log(" I am static");
    }

}  

let person1 = new Person("amirul", "maula");
console.log(person1.greeting()); 
//console.log(person1.test());
console.log(Person.test());