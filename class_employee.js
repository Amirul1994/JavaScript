/* Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.*/  


class Employee{
    constructor(a, b){
        this.name = a; 
        this.salary = b;
    } 

    annual_salary(){
        let annual_salary = this.salary * 12; 
        return `${this.name}'s annual_salary is`, annual_salary;  
    }
}  

let employee1 = new Employee("amirul", 2000);
console.log(`${employee1.name}'s salary:`,employee1.annual_salary()); 



class Manager extends Employee{
    constructor(a,b,c){
        super(a,b); 
        this.department = c;
        
    } 

    annual_salary(){ 
        let annual_salary = (this.salary + (this.salary/100)*10) * 12;
        return annual_salary;
    }
} 

let manager1 = new Manager("taofiq", 3500, "automation"); 
let manager2 = new Manager("haider", 4000, "automation");

console.log(`${manager1.name}'s annual salary:`,manager1.annual_salary());   
console.log(`${manager2.name}'s annual salary:`,manager2.annual_salary());   