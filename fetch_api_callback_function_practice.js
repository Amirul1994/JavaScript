let persons = [
    { firstname: "imam", lastname:"muhammad"}, 
    { firstname: "amirul", lastname: "maula"}
];   


function createPerson(person, callback) { 
    setTimeout(function(){
        persons.push(person); 
        //console.log(persons);
        callback();
    }, 2000);
} 



function getPerson() {
    setTimeout(function(){
        let output = ''; 
        persons.forEach(function(person){
            output += `<li>${person.firstname} ${person.lastname}</li>`; 
        });
        document.getElementById('output').innerHTML = output; 
    }, 500);
} 

createPerson({firstname:"Rony", lastname: "Chy"}, getPerson); 
// getPerson();