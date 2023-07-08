/* var a = { name: "amirul", age: 30};
var b = { name: "sohel", age: 30}; 
let c = { name: "omor", age: 31}; */ 


class Individual{
    constructor(){
        this.name = "amirul"; 
        this.age = 30;
    }
} 

let personnel1 = new Individual(); 
let personnel2 = new Individual(); 
let personnel3 = new Individual();   

console.log(personnel1); 
console.log(personnel2); 
console.log(personnel3);  

console.log(""); 

class Flat{
    constructor(){
        this.size = "1350 sqft"; 
        this.location = "shewrapara"; 
        this.room = 3; 
    }
} 


let flat1 = new Flat(); 
let flat2 = new Flat(); 
let flat3 = new Flat(); 

console.log(flat1); 
console.log(flat2); 
console.log(flat3); 

console.log("");

class Sister{
    constructor(){
        this.name = "raisa";
        this.age = 25; 
        this.dob = "16-03-1999"; 
    }
} 


let ledu1 = new Sister(); 
let ledu2 = new Sister(); 
let ledu3 = new Sister();  


console.log(ledu1); 
console.log(ledu2); 
console.log(ledu3); 

console.log(""); 

class Mother{
    constructor(){
        this.name = "romena"; 
        this.age = "61"; 
        this.dob = "31-12-1962";
    }
} 

let buttu1 = new Mother(); 
let buttu2 = new Mother(); 
let buttu3 = new Mother(); 

console.log(buttu1); 
console.log(buttu2); 
console.log(buttu3);  

console.log(""); 


class Father{
    constructor(){
        this.name = "golam maula"; 
        this.age = 69; 
        this.dob = "01-01-1953"; 
        this.dod = "20-03-2022";
    }
} 


let balok1 = new Father(); 
let balok2 = new Father(); 
let balok3 = new Father(); 

console.log(balok1); 
console.log(balok2); 
console.log(balok3);  

console.log(""); 

class career{
    constructor(){
        this.devops = "better"; 
        this.cs = "better"; 
        this.it = "good";  
    }
} 

let career1 = new career(); 
let career2 = new career(); 
let career3 = new career(); 
let career4 = new career(); 

console.log(career1); 
console.log(career2); 
console.log(career3); 
console.log(career4); 


console.log(""); 

class City{
    constructor(one, two, three){
        this.first = one; 
        this.second = two; 
        this.third = three;
    }
} 

var city1 = new City("dhaka", "chattogram", "rajshahi"); 
let city2 = new City("sylhet", "khulna", "barisal"); 
let city3 = new City("comilla", "mymensingh", "rongpur"); 

console.log(city1); 
console.log(city2); 
console.log(city3);

console.log(""); 

class Letter{
    constructor(first, second){
        this.one = first; 
        this.two = second; 
    }
} 

let letter1 = new Letter("a","b"); 
let letter2 = new Letter("c", "d"); 

console.log(letter1); 
console.log(letter2);  

console.log(''); 


class University{
    constructor(one, two, three, four){
         this.varsity1 = one; 
         this.varsity2 = two; 
         this.varsity3 = three; 
         this.varsity4 = four
    }
} 

let University1 = new University("harvard", "mit", "chicago", "stanford"); 
let University2 = new University("uni_chic", "uni_pen", "yale", "uni_colum"); 
var University3 = new University(); 
let University4 = new University("harvard", "mit", "chicago", "stanford","uni_chic");


console.log (University1); 
console.log(University2); 
console.log(University3);
console.log(University4);
document.write(University3);  


console.log(''); 

class Name{
    constructor(a, b){
        this.name = a; 
        this.name2 = a; 
        this.name3 = a; 
        this.name4 = b;
    }
} 

let Name2 = new Name("imam", "muhammad"); 
var Name3 = new Name("amirul", "maula");  

console.log(Name2); 
console.log(Name3);  