class One {
    constructor(a){
        this.first = a; 
    } 

    age(){
        return `${this.first} is 30 years old`; 
    }
}   

let name1 = new One("amirul");  

//console.log(name1.age()); 


class Two extends One{
    constructor(a,b){
        super (a); 

        this.second = b;
    }
} 

let name2 = new Two("amirul", "sre"); 
console.log(name2); 
console.log(name2.age());   

console.log(""); 
class Name {
   constructor(a, b) {
         this.one = a; 
         this.two = b;  
   } 

   age(){
    return `${this.one} ${this.two} is 30 years old.`; 
   }
} 

let person1 = new Name("amirul", "maula");  

class Profession extends Name{
      constructor(a,b,c,d) {
         super (a,b)
         this.three = c; 
         this.four = d;
      } 

      job(){
        return `He is learning ${this.three} to be an ${this.four}.`;
      }
}  

let person2 = new Profession("amirul", "maula", "programming", "sre"); 
console.log(person2.age(), person2.job());