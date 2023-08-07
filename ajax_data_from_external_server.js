// https://dummyjson.com/ 
// api is used to fetch information from application interface 
// api is language independent
// restful api 
// search about api & restful api


document.getElementById('get_data').addEventListener('click', loadProducts); 


function loadProducts(e) { 

    let number = document.getElementById('numberProducts').value;

    console.log(number);

    let xhr = new XMLHttpRequest(); 

    xhr.open('GET',`https://dummyjson.com/products/${number}`, true);  

    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading.......</h3>";
    };

    xhr.onload = function() {
        
        if (this.status === 200) {
            let data = JSON.parse(this.responseText); 
            console.log(data);  
              
            let image = data.images; 
            console.log(image);
            
            let output = "<ol>"; 

            image.forEach(function(item){ 

                console.log(item); 

                output += `<li>${item}</li>`;

            });


            output += "</ol>"; 

            document.getElementById('output').innerHTML = output;
            
            let desc = data.description; 
            console.log(desc);
           

        }
    } 
    
    xhr.send();
} 



