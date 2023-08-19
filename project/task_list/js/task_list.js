/// Define UI element 

let form = document.querySelector('#task_form'); 
let taskList = document.querySelector('ul'); 
let clearBtn = document.querySelector('#clear_task_btn'); 
let filter = document.querySelector('#task_filter'); 
let taskInput = document.querySelector('#new_task'); 

// Define event listeners 
form.addEventListener('submit', addTask); 
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask); 

// keyup means the event will be triggered if any key
// is pressed
filter.addEventListener('keyup', filterTask);

//The listener function `getTasks` will be called when the
// webpage (DOM) has finished loading.
document.addEventListener('DOMContentLoaded', getTasks);


// Define functions 
// add task 


function addTask(e) {
/* e.preventDefault() of code is used to prevent the default behavior of a form submission, which typically involves navigating to a new page or reloading the current page. By adding e.preventDefault(); within an event handler function, you ensure that the default behavior is prevented, allowing you to handle the event and perform your custom actions without triggering a full page reload.

Here's an explanation of how it works:

When a form is submitted, the default behavior is for the browser to send the form data to the server and load a new page based on the form's action attribute. If you're handling the form submission via JavaScript and want to perform some actions on the page without navigating away, you use e.preventDefault(); to stop the default behavior.

By preventing the default behavior, you ensure that the form data isn't sent to the server and the page isn't reloaded. Instead, your addTask function can handle the task addition logic while staying on the same page.

*/
   
    if(taskInput.value === '') {
        alert("Add a task");
    } else { 
        // create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " ")); 
        
        let link = document.createElement('a');
        
        // link: This variable likely refers to an HTML element, typically an anchor (<a>) element. The exact context in your code would determine what link is referring to.

        //.setAttribute('href', '#'): This method is used to set the value of an attribute for an HTML element. In this case, it's modifying the href attribute of the element and setting it to '#'.

        //When the href attribute of an anchor element is set to '#', clicking the link won't navigate to a new page or change the URL. Instead, it will cause the page to scroll to the top, essentially behaving as a jump link that scrolls to the beginning of the page.
        
        link.setAttribute('href', '#');
        
        link.innerHTML = 'x';
        li.appendChild(link);

        taskList.appendChild(li);
        
        // the idea of local storage is to store data locally
        // as the data is not feasible after the reload of 
        // the web page (dom), navigate away from the page
        // even closing the browser  

        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = ''; // Clear input field after adding a task  

        

        

    }
    e.preventDefault();
}   

// remove task 
function removeTask(e) { 
    // hasAttribute checks the presence of the attribute
    // inside ()
    if (e.target.hasAttribute("href")){
        if(confirm("are you sure?")){
            let ele = e.target.parentElement;
            // remove() will delete the selected element of 'ele'
            ele.remove(); 
            //console.log(ele); 
            removeFromLS(ele);
        }
        
    }
}  

// Clear Task 

function clearTask(e) {
    // taskList.innerHTML = ""; 

    // the following is the faster way to remove 
    
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    } 
    localStorage.clear();
} 

// Filter Task 

function filterTask(e) {
    // here in 'text' the user input is kept
    let text = e.target.value.toLowerCase(); 
    //console.log(text); 
    
    // the forEach() is used to check all 
    // the items of the querySelectorAll('li')
    
    document.querySelectorAll('li').forEach(task => {
           let item = task.firstChild.textContent; 
           
           // indexof() returns -1 if any index is not found
           if (item.toLowerCase().indexOf(text) != -1) {
                   task.style.display = 'block';
           } else {
            task.style.display = 'none';
           }
    });
} 

// store in local storage 

function storeTaskInLocalStorage(task) {
      
    let tasks;
    
    // localStorage is the builtin object for local storage
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      } 
      tasks.push(task); 

      localStorage.setItem('tasks', JSON.stringify(tasks));
} 


function getTasks() {
    
    let tasks; 
    
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 

    tasks.forEach(task => {
        let li = document.createElement('li'); 
        li.appendChild(document.createTextNode(task + " ")); 
        let link = document.createElement('a'); 
        link.setAttribute('href', '#'); 
        link.innerHTML = 'x'; 
        li.appendChild(link); 
        taskList.appendChild(li);
    });
} 

function removeFromLS(taskItem) {
    
    let tasks; 
    
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 
    
    // the following two lines will remove 'x' sign 
    // beside task name ('task one, task two etc.')
    let li = taskItem; 
    li.removeChild(li.lastChild); // <a>x</a> 

    tasks.forEach((task, index) => {

        if (li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    }); 

    localStorage.setItem('tasks', JSON.stringify(tasks));
} 

/* The code tasks.splice(2, 3) is using the splice() method to remove three elements from the tasks array starting at index 2. Here's what it means:

Assuming you have an array tasks like this: 

const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];

When you call tasks.splice(2, 3);, it will remove three elements from the array starting at index 2. After this operation, the array will be modified, and the result will be: 

['Task 1', 'Task 2', 'Task 5', 'Task 6'];

In this case, the elements 'Task 3', 'Task 4', and 'Task 5' have been removed from the array because they were at indexes 2, 3, and 4 respectively.

So, the splice() method in this context removes the specified number of elements starting from the specified index in the array. The second argument (3) indicates the number of elements to remove.

*/