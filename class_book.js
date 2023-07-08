/* Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.*/ 


class Book {
    constructor(a, b, c){
        this.title = a; 
        this.author = b; 
        this.publication_year = c; 
    } 

    details(){
        return `the title of the book is ${this.title}, the author is ${this.author}, the publication year is ${this.publication_year}`; 
    }
}  

let book1 = new Book("storm", "j", 2010); 
console.log(book1.details());  


class Ebook extends Book {
    constructor(a, b, c, d){
        super(a, b, c); 
        this.price = d; 
    }
} 

let book2 = new Ebook("blizzard", "e", 2012, 150); 

console.log(`${book2.details()} and the price is ${book2.price}`);