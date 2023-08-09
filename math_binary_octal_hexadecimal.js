let boh = function (n, base) {

    if (n < 0) {
        n = 0xffffffff + n + 1;
    }
    else 
    {
        switch (base) 
        {
            case 'b': 
            var a = parseInt(n, 10); 
            var z = a.toString(2); 
            return z; 
            break; 
            
            case 'o': 
            var a = parseInt(n, 10); 
            var z = a.toString(8); 
            return z; 
            break; 

            case 'h': 
            var a = parseInt(n, 10); 
            var z = a.toString(16); 
            return z; 
            break; 

            default: 
            return ("wrong input");
        }
    }
}  

console.log(boh(120, 'b')); 
console.log(boh(120, 'o')); 
console.log(boh(120, 'h'));
console.log(boh("asdf", 'c'));