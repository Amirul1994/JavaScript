/* Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details. */  

class Person{
    constructor(a, b, c){
        this.name = a; 
        this.age = b; 
        this.country = c;
    } 

    details(){
           return `${this.name} ${this.age} ${this.country}`;
    }
} 

let person1 = new Person("amirul", 30, "BD"); 
let person2 = new Person("imam", 30, "BD"); 

console.log(person1.details()); 
console.log(person2.details()); 