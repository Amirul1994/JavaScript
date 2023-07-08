/*Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.*/  


class Rectangle{
    constructor(a, b){
        this.width = a; 
        this.height = b;
    }

    area(){
         let area = this.width * this.height; 
         return area;
    } 

    perimeter(){
          let perimeter = 2 * (this.width + this.height); 
          return perimeter;
    }
}  

let rectangle1 = new Rectangle(5, 3); 

console.log("the area of the rectangle is" , rectangle1.area()); 
console.log("the perimeter of the rectangle is" , rectangle1.perimeter());