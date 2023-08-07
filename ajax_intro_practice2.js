document.getElementById('one').addEventListener('click', imp); 

function imp() {
    let c = new XMLHttpRequest(); 
    console.log(c);

    c.open('GET', 'data3.txt', true); 

    c.onload = function() {
        if (this.responseURL = "http://127.0.0.1:5500/data3.txt") {
            console.log("ha ha");
            console.log(this.responseText);
            document.getElementById('two').innerHTML = `<h3>${this.statusText}</h3>`
        }
    }
    c.send();
}