/* setTimeout(function(){
    console.log("raisa is ledu");
},2000); */ 


let flat = [
    {size: 1450, location: "shewrapara"}
];  


function totalflat(newflat, otherflat) { 

    setTimeout(function() {
        flat.push(newflat); 
        otherflat();
    },1000);

}; 

function listflat() {

    let addflat = '';  

    setTimeout(function(){ 
        flat.forEach(function(flat){
            addflat += `<li>${flat.size} ${flat.location}</li>`;
        })
      
        document.getElementById('b').innerHTML = addflat;
    }, 500);

} 

totalflat({size: 1350, location: "matikata"}, listflat); 
//totalflat({size: 868, location: "jatrabari"});
totalflat({size: 868, location: "jatrabari"}, listflat);

//console.log(flat); 




