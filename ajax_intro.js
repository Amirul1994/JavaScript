// synchronous programming - means the code will 
// run step by step 
// if a line of codes executes then 
// the next line will be executed 

// asynchronous programming - the line of code 
// won't wait the previous line to be excuted 

// there are several techniques for asynchronous 
// programming, AJAX - asynchronous javascript 
// and xml is one of them  
// ajax helps to get data without loading the page 


document.getElementById('get_data').addEventListener('click', loadData);  

function loadData() {
    // create XHR object ( xhr- xml http request)
    let xhr = new XMLHttpRequest(); 
    //console.log(xhr);
    
    // open function will call the particular URL 
    // from which the data will be extracted
    xhr.open('GET', 'data.txt', true); 

    
    // onload will call the function  
    // when the data is loaded 
    xhr.onload = function () {
        // http statuses 
        // 200 : "OK" 
        // 403 : "Forbidden" 
        // 404 : "Not Found"
        if (this.status === 200) { 
            //console.log (this.status); 
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`;
        }

    } 

   // send will let the data pass of onload 
    xhr.send();
    
}