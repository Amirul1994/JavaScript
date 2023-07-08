/* Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.*/ 


class Shape { 
    constructor(r,b){
         this.radius = r; 
         this.base = b; 
        } 
} 


class Circle extends Shape {
    constructor(r){
        super(r); 
    } 
    
    circle_area(){
        var area = Math.PI * this.radius**2;
        area = area.toFixed(4); 
        return area;
   }
}  

var ca = new Circle(3); 
console.log("the area of circle is ", ca.circle_area());


class Triangle extends Shape {
      constructor(b,h){ 
        // the Shape class constructor expects two arguments: r and b.
        // By passing undefined as the first argument, you indicate that the radius property in the Shape class should not be set explicitly when creating a Triangle object. This assumes that the radius property is not necessary for the Triangle class.
        
        super(undefined, b);
        this.height = h; 
      } 

      triangle_area(){
        var area = 0.5  * this.height * this.base;
        return area;
      }

} 

let ta = new Triangle(6, 4);
console.log("the area of triangle is ", ta.triangle_area());