class Person { // base class
     constructor(fname, lname){ 
        this.firstname = fname; 
        this.lastname = lname;
    } 

    greeting() {
        return `Hello ${this.firstname} ${this.lastname}`;
    }
} 

class Customer extends Person { // sub class
     constructor(fname, lname, phone, memebership){
        super(fname, lname);
        
        this.phone = phone; 
        this.memebership = memebership;
     } 

     fullname() {
        return `${this.firstname} ${this.lastname}`;
     }
} 


let person1 = new Person("amirul", "maula"); 
console.log(person1); 
console.log(person1.greeting());   
console.log(person1.fullname());


let customer1 = new Customer("imam", "muhammad", "1646466", "585"); 
console.log(customer1); 
console.log(customer1.greeting()); 
console.log(customer1.fullname());