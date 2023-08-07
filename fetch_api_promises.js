// promises can be used as the alternative of callback function 



let persons = [
    { firstName: "Imam", lastName: "Muhammad"}, 
    { firstName: "Amirul", lastName: "Maula"}
]; 


function createPerson(person) { 
    // if promise is kept resolve will be called 
    // otherwise reject will be called
    let prom = new Promise(function(resolve, reject){
        
        // resolve will try to complete push operation
        persons.push(person);  
        
        let 
        // error = true; 
        error = false;

        if (!error) {
            resolve();
        } 
        else {
            reject('error!: something wrong!');
        }
    }); 
    return prom;
    
} 


function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({firstName:"Rony", lastName: "Chy"}).then(getPerson).catch(function(err){
    console.log(err);
}); 