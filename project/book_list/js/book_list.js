// get the UI elements 

let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');



// book class 

class Book {
    constructor(title, author, isbn) {
        this.title = title; 
        this.author = author; 
        this.isbn = isbn; 
    }
}  

// UI class 

class UI {
    /* constructor() {

    }*/ 

    static addToBooklist(book) {
        // console.log(book); 
        let list = document.querySelector('#book-list'); 

        let row = document.createElement('tr'); 
        // console.log(row); 

        // for anchor tag 'a' ,delete is the 
        // built-in class
        
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td> 
        <td><a href='#' class="delete">X</a></td>` 

        // console.log(row);  
        
        list.appendChild(row);

    } 

    static clearFields() {
        document.querySelector("#title").value = ''; 
        document.querySelector("#author").value = ''; 
        document.querySelector("#isbn").value = ''; 
    } 

    static showAlert(message, className) {
        let div = document.createElement('div'); 
        
        /* ﻿The code you provided is a JavaScript function that sets the class of the div element with class "alert". It does this by using the DOM manipulation method `element.classList.add()` to add the class "alert ${className}" to the div element.
        The function first selects the div element using its class name ("alert"). It then adds the new class "alert ${className}" to this element using the `element.classList.add()` method. Finally, it modifies the class of the div element using the `element.classList.remove()` method. */
		
		div.className = `alert ${className}`; 
        
		div.appendChild(document.createTextNode(message)); 

        let container = document.querySelector('.container'); 

        let form = document.querySelector('#book-form'); 

        /*   Certainly! Let's break down the code step by step:
		
		let container = document.querySelector('.container');
        
		In this line, you're using the document.querySelector method to select an element with the class name container. This element is presumably a container in your HTML where you want to insert your alert message. The selected element is stored in the container variable.
		
		container.insertBefore(div, form);
        
		Here, you're using the insertBefore method to insert the div (which represents your alert message) before another element in the DOM. Specifically, you're inserting it before the form element. This effectively places the alert message just above the form within the chosen container. The result is that the alert appears as a temporary message above the form.
		
		setTimeout(function() {
           document.querySelector('.alert').remove();
         }, 3000); 
		 
		 
        In this part, you're using the setTimeout function to schedule a task to occur after a specified delay. The function passed to setTimeout will be executed once the specified delay (in milliseconds) has passed. Here, you're using a delay of 3000 milliseconds (or 3 seconds).

        Inside the function passed to setTimeout, you're using document.querySelector('.alert') to select the alert message element (assuming its class is "alert"). Then, you're calling the remove method on that element to remove it from the DOM.

        Putting it all together, this code sequence creates a temporary alert message by appending a <div> containing the alert content just above the form in the designated container. The alert message is displayed for 3 seconds and then automatically removed from the DOM. This is a common way to provide short-lived messages or notifications to users in web applications.*/
        
		container.insertBefore(div, form); 

        setTimeout( function(){
            document.querySelector('.alert').remove();
        }, 3000);
    } 

    static deleteFromBook(target) {
        if(target.hasAttribute('href')) {
            target.parentElement.parentElement.remove(); 
            
            //console.log(target.parentElement.previousElementSibling.textContent.trim()); 
            
            // for static function in the class, 
            // the function has to be called using the class name 
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim()); 
            
            UI.showAlert('book removed!', 'success');
        }
    }
}


// local storage class 

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
       
         books.forEach(book =>{
            UI.addToBooklist(book);
        })
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



// add event listener 

form.addEventListener('submit', newBook); 
booklist.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks());



// define functions 

function newBook(e) {
    // console.log("hello"); 
    
    // the default behaviour of 'submit' is 
    // to reload the page after the button 
    // is clicked, that's why the output of 
    // console.log() is flickering
    // the e.preventDefault() prevents that 
    // default behaviour
  
    let title = document.querySelector("#title").value;

    let author = document.querySelector("#author").value;

    let isbn = document.querySelector("#isbn").value; 

    let ui = new UI();

    if (title === '' || author === '' || isbn === '') {
       UI.showAlert("please fill all the fields!", "error");
    }

    else {
    let book = new Book(title, author, isbn);
    // console.log(book);

    UI.addToBooklist(book); 

    UI.clearFields(); 

    UI.showAlert("book added!", "success"); 

    Store.addBook(book);
    
    }
    
    e.preventDefault();
  
   
} 


function removeBook(e) {
    
    // let ui = new UI(); 
    UI.deleteFromBook(e.target); 
    
    e.preventDefault(); 

}