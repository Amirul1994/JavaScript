let flat = [
    {size: 1450, location: "shewrapara"}
]; 


function addflat(newflat) {
    let prom = new Promise(function(resolve, reject){
         flat.push(newflat);
         resolve();
    }); 
    return prom;
}; 


function listflat() {
    
    let otherflat = ''; 
    
    setTimeout(function(){
        
        flat.forEach(function(flat) {  
            otherflat += `<li>${flat.size} ${flat.location}</li>`;
   }); 
   document.getElementById('b').innerHTML = otherflat;
}, 500);
}

addflat({size: 868, location: "jatrabari"}).then(listflat); 

console.log();

let flat2 = [
    {size: 1350, location: "matikata"}
];  


function addflat2(newflat){
    let prom2 = new Promise(function(resolve, reject){
        
        flat2.push(newflat);

        if (newflat = 'a'){
            reject("for flat2, insert value appropriately");
        } 
        else{
            resolve();
        }
    }); 
    return prom2;
} 


function listflat2() { 

    let otherflat2 = ''; 

    setTimeout(function(){
        flat2.forEach(function(flat2){
            otherflat2 += `<li>${flat2.size} ${flat2.location}</li>`
        })
        document.getElementById('c').innerHTML = otherflat2
    }, 500);

} 

addflat2('a').
then(listflat2).
catch(function(error){
console.log(error);
});