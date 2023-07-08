class Name {
    constructor(a, b){
        this.individual = a;
        this.individual2 = b; 
    } 

    id(){
        return `${this.individual} ${this.individual2}`;
    } 

    static id2(){
        return `!`; 
    } 

    static id3(c,d){
         return `${c} ${d}`;
    } 

    //static id4(this.individual,this.individual2){
        //return `${c} ${d}`;
   //}
}  

var name1 = new Name("amirul", "maula"); 
console.log(name1.id()); 
//console.log(name1.id2()); 
console.log(Name.id2()); 
console.log(Name.id3("one","two"));