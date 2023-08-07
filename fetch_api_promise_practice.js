let persons = [
    { firstname: "imam", lastname: "muhammad"}, 
    { firstname: "amirul", lastname: "maula"}
];  

function createperson(person){
    let prom = new Promise(function (resolve, reject) {
        persons.push(person); 

        let error = true; 

        if (!error){
        resolve(); 
        } 
        else {
            reject('error: something wrong');
        }
    }); 

    return prom; 
}  


function getperson() {
    setTimeout(function () {
        
        let output = ''; 
        persons.forEach(function (person) {
            output += `<li>${person.firstname} ${person.lastname}</li>`;
        });
      document.getElementById('output').innerHTML = output;
    }, 500);
} 

createperson({ firstname: "raisa", lastname: "ledu"})
.then(getperson);
/*.catch(function(err){
    console.log(err);
});*/