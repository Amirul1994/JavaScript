// querySelector - select an html element, here I have selected an Id 
let form = document.querySelector('#task_form'); 
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn'); 
let filter = document.querySelector('#task_filter'); 
let taskInput = document.querySelector('#new_task'); 

form.addEventListener('submit', addTask); 
taskList.addEventListener('click', removeTask); 
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask); 
document.addEventListener('DOMContentLoaded', getTasks);


function addTask(e) { 
    
   if(taskInput.value === ''){
      
        alert("add a task");
    } 
    else { 
        
        // createElement() - create an html element, 
        // here I have created an list element 
        let li = document.createElement('li'); 
        
        // createTextNode - This method is often used to dynamically insert or 
        // update text content within an HTML element on a webpage. 
        // appendchild - add an element within parent element 
        li.appendChild(document.createTextNode(taskInput.value + " ")); 
        
        // 'a' for anchor tag
        let link = document.createElement('a'); 
        
        // setAttribute() method is used to set or update attributes 
        // of an html element using javascript
        
        link.setAttribute('href', '#'); 
        
        // '#'. This is a common technique used in web development to create anchor links that don't navigate to a new page but rather stay on the same page and scroll to a specific section.


        link.innerHTML = 'x'; 

        li.appendChild(link); 

        taskList.appendChild(li); 

        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = ''; 
        
    } 

    e.preventDefault();
} 


function removeTask(e) { 
    // e.target refers to the element that triggered the event,
    // hasAttribute checks the presence of the attribute inside ()
    // e.target.hasAttribute("href") - means the event will be 
    // triggered if it finds out href element
    
    if (e.target.hasAttribute("href")){
        
        // confirm() provides a confirmation dialog box
        if(confirm("are you sure?")){ 
            
        // .parentElement: This property is used to access the 
        // direct parent element of the element referenced by e.target
            
            let ele = e.target.parentElement;
            console.log(ele);
            
           // remove() will delete the selected element of 'ele'
            ele.remove(); 
            removeFromLS(ele);
            
        }
        
    }
}   


function clearTask(e) {
    // taskList.innerHTML = ""; 
    console.log(taskList.firstChild);
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}   


function filterTask(e) {
       let text = e.target.value.toLowerCase(); 
       //console.log(text);

       document.querySelectorAll('li').forEach(task => {
        
        // textContent - is used to retrieve the text content of 
        // a node, which includes the text inside the element 
        // but excludes html tags
        let item = task.firstChild.textContent; 
        
        // indexOf() method is a built-in method that is 
        // used to find the index of a specified value 
        // within a string
        // indexOf() returns -1 if any index is not found
        
        if (item.toLowerCase().indexOf(text) != -1) { 
            //console.log(text);
            task.style.display = 'block'; 
        } else {
            task.style.display = 'none';
        }
       });
} 

function storeTaskInLocalStorage(task) {
    
    let tasks; 
    
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 

    tasks.push(task); 
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
} 


// retrieve from the local storage and display on the page

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


// remove from local storage 

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



