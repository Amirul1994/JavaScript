var bio = {name:"amirul", age: "30", address:"dhaka", combo: function(){
    return `${this.name} is ${this.age} years old`;
}}; 

console.log(bio.name); 
console.log(bio["age"]);  
console.log(bio.combo); 
console.log(bio.combo());  


let mother = {
    name: "romena", 
    age: 61, 
    address: "dhaka", 
    type: "buttu",
    combo: function(){
    return `${this.name} is ${this.type}`;
    }
}; 

console.log(mother.combo()); 


let sister = {
    name: "raisa", 
    age: 25, 
    location: "dhaka", 
    type: "ledu", 
    combo: function(){
        return `${this.name} is ${this.type}`;
    } 
};  

console.log(sister.combo());   

let flat = {
    location: "shewrapra", 
    size: 1450, 
    room: 3, 
    veranda: 3,
    /*combo: function home(){
      return `our flat is in ${this.location} having ${this.room} rooms`;
    }*/
    combo: function(){
        return `our flat is in ${this.location} having ${this.room} rooms`;
    } 
};

console.log(flat.combo());   


let flat2 = {
    location: "jatrabari", 
    size: 854, 
    room: 3, 
    veranda: 1, 
    combo: function(){
       console.log("our flat is in", this.location); 
       return `our flat is in ${this.location}`;
    }
}; 
console.log(flat2.combo());
document.write(flat2.combo());