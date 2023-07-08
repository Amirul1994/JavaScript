/* Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.*/  


class Vehicle {
  constructor(a,b,c){
    this.make = a;
    this.model = b; 
    this.year = c;  
  } 

  details(){
    return `the manufacturer is ${this.make} 
    the model is ${this.model}
    the year is ${this.year}`;
  }
} 

class Car extends Vehicle {
    constructor(a,b,c,d) {
       super (a, b, c) 
       this.doors = d; 
    } 

    door(){
        return `it has ${this.doors} doors`
    }
} 

let vehicle1 = new Car("mclaren", "f1", "2015", "4"); 
console.log(vehicle1.details(), vehicle1.door()); 