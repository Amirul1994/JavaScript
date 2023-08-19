let form = document.querySelector('#book-form'); 
let booklist = document.querySelector('#book-list');  


class Book {
    constructor(title, author, isbn) {
            this.title = title; 
            this.author = author; 
            this.isbn = isbn; 
    }
}   


class UI {
    static addToBooklist(book) {
        
        // 'book-list' - id of the table body
        let list = document.querySelector('#book-list'); 

        // create table row
        let row = document.createElement('tr');
        
       
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>` 

        console.log(row);
        
        // the following line will add the table row
        // data to the table body
        list.appendChild(row);
    }   

    static clearFields() {
        document.querySelector("#title").value = ''; 
        document.querySelector("#author").value = ''; 
        document.querySelector("#isbn").value = '';
    }

    static showAlert(message, className) {
        let div = document.createElement('div'); 

        div.className = `alert ${className}`; 
        // div.className = `${className}`;
        div.appendChild(document.createTextNode(message)); 

        let container = document.querySelector('.container'); 

        let form = document.querySelector('#book-form'); 

        container.insertBefore(div, form); 

        setTimeout(function(){
            
            // document.querySelector('.alert') is used to find the 
            // first HTML element in the document 
            // with the class name "alert". 
            
           document.querySelector('.alert').remove(); 
           // document.querySelector('.${className}').remove();
        }, 3000);
    }
    
    static deleteFromBook(target) {
        if (target.hasAttribute('href')) {
             
            console.log(target); 
            console.log(target.parentElement); 
            console.log(target.parentElement.parentElement);

            target.parentElement.parentElement.remove(); 

            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());

            UI.showAlert('book removed!', 'success');
        }
    }
    
}   


class Store {
      static getBooks() {
        let books; 

        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        } 
        return books;
      } 

      static addBook(book) {
        let books = Store.getBooks(); 
        books.push(book); 

        localStorage.setItem('books', JSON.stringify(books));
      } 

      static displayBooks() {
        let books = Store.getBooks(); 

        books.forEach(book => {
            UI.addToBooklist(book);
        });
      } 

      static removeBook(isbn) {
        let books = Store.getBooks(); 

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        }); 

        localStorage.setItem('books', JSON.stringify(books));
      }
} 




form.addEventListener('submit', newBook); 
booklist.addEventListener('click', removeBook); 
document.addEventListener('DOMContentLoaded', Store.displayBooks());


function newBook(e) {
    // console.log("hello"); 

    let title = document.querySelector("#title").value; 
    let author = document.querySelector("#author").value; 
    let isbn = document.querySelector("#isbn").value;

    // declare the object for the UI class
    let ui = new UI; 
    
    if (title === '' || author === '' || isbn === '' ){
        UI.showAlert('please fill all the fields!', "error");
    } 
    else 
    {
        let book = new Book(title, author, isbn); 
        console.log(book); 

        UI.addToBooklist(book); 
        
        UI.clearFields();
        
        UI.showAlert("book added!", "success"); 

        Store.addBook(book);
    }  

    e.preventDefault();

} 


function removeBook(e) { 
    // console.log(e);
    UI.deleteFromBook(e.target); 
    e.preventDefault();
}