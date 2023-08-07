// setTimeout() let the function in a lately fashion 
// 2000ms - 2 second

/*
setTimeout(function() {
     console.log("hello world");
}, 2000); 
*/  

/*
let persons = [
    { firstName: "Imam", lastName: "Muhammad"}, 
    { firstName: "Amirul", lastName: "Maula"}
]; 


function createPerson(person) { 
    setTimeout(function(){
        persons.push(person); 
        
    }, 2000);
} 


function getPerson() {
    setTimeout(function(){
        let output = ''; 
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`; 
        });
        document.getElementById('output').innerHTML = output; 
    }, 500);
} 

createPerson({firstName:"Rony", lastName: "Chy"}); 
getPerson();
*/




let persons = [
    { firstName: "Imam", lastName: "Muhammad"}, 
    { firstName: "Amirul", lastName: "Maula"}
]; 

/* The createPerson function takes two parameters: person (an object representing a new person) and callback (a function that will be called once the new person is added to the array).

Inside createPerson, a 2-second delay (2000 milliseconds) is added using setTimeout.

After the delay, the person object is pushed into the persons array.

The callback function is called after the new person is added to the array.*/

function createPerson(person, callback) { 
    setTimeout(function(){
        persons.push(person); 
        callback();
    }, 2000);
} 


/* The getPerson function is defined, which has no parameters.

Inside getPerson, a 500-millisecond delay is added using setTimeout.

After the delay, the function iterates through the persons array and generates an HTML list (<li>) containing the first name and last name of each person.

The generated HTML list is then set as the innerHTML of the element with the ID 'output', effectively displaying the list of persons on the webpage.

Finally, the createPerson function is called with an object representing a new person: {firstName: "Rony", lastName: "Chy"}, and getPerson is passed as the callback function to be executed once the new person is added. */


function getPerson() {
    setTimeout(function(){
        let output = ''; 
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`; 
        });
        document.getElementById('output').innerHTML = output; 
    }, 500);
} 

createPerson({firstName:"Rony", lastName: "Chy"}, getPerson); 
// getPerson();

// getPerson() won't be able to push the value in the persons array 
// as the getPerson() function is called after 500 ms 
// whwre createPerson() function is called after 2000 ms