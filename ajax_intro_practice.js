document.getElementById('test1').addEventListener('click', fn); 

function fn() {
    let a = new XMLHttpRequest(); 
    console.log(a); 

    a.open('GET', 'data2.txt', true); 

    a.onload = function() { 

        if (this.status === 200) {

        document.getElementById('test2').innerHTML=`${this.responseText}`
       
    }
}
a.send();
}  


document.getElementById('test3').addEventListener('click', danger); 


function danger() {
    let b = new XMLHttpRequest(); 
    console.log(b); 

    b.open('GET', 'data3.txt', true); 

    b.onload = function()
    {
        if (this.status === 404) {
        console.log("error");
    }
    } 
    b.send();
}