function message(){
    console.log("third event");
}  

document.getElementById('btn4').addEventListener('click', message2); 

function message2(){
    console.log(2 + 2);
} 

document.getElementById('btn5').addEventListener('dblclick', message3); 

function message3(){
    var a = 6; 
    var b = 4; 
    if ( a > b){
        console.log(`${a} is greater than ${b}`);
    }
} 

document.getElementById('btn6').addEventListener('mouseover', message4); 

function message4() {
     let a = {one: 'name', two: 'age', three: 'address'}; 
     console.log(a.one); 
     console.log(a["two"]);
};