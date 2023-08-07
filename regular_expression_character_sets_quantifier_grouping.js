let re; 
let str; 

// [] - chracter set

re = /h[ea]llo/; // must be one of them inside brackets
re = /h[eai]llo/; // if none, it won't match
re = /[HA]ello/; 
re = /[HA]ello/i;
re = /[^ha]ello/i; // anything except those inside brackets 
re = /^[ha]ello/i; // must start with h or a 
re = /[a-f]ello/; // [-] - indicates range 
re = /[A-Z]ello/;
re = /^[A-Z]ello/;
re = /^[A-Z]/; 
re = /^[a-z]/;
re = /[A-Za-z]/; // uppercase or lowercase anyone has to present 
re = /[A-Za-z]ello/;
re = /[0-9]ello/; 
re = /^[0-9]ello/;
re = /[^0-9]ello/; 
re = /[0-9][0-9]ello/; // two digits has to present 
re = /[0-9][0-9][0-9]ello/;  

// {} - quantifier 

re = /el{2}o/; // l has to present two times 
re = /el{3}o/; 
re = /hel{2,5}o/; // range, l has to present 2 to 5 times 
re = /hel{2,}o/; // l has to present at least two times 


// () - grouping 

re = /^([0-9]){10}/;




str = "hello"; // if more than one, it won't match 
str = "heallo";
str = "Aello"; 
str = "hello"; 
str = "tello"; 
str = "hello"; 
str = "aello"; 
str = "hello";
str = "fello"; 
str = "xello"; 
str = "Sello"; 
str = "Hello"; 
str = "Amirul"; 
str = "amirul"; 
str = "A"; 
str = "hello"; 
str = "Again Hello!"; 
str = "Again 8ello"; 
str = "3ello"; 
str = "tello"; 
str = "3ello"; 
str = "32ello"; 
str = "323ello"; 
str = "helllo"; 
str = "hellllllo"; 
str = "helo"; 
str = "323ello"; 
str = "32ello"; 
str = "1234567890ello"; 

// Bangladeshi Phone Number 
// total 11 digits

re = /^01[0-9]{9}$/; 
str = "01777777777"; 

re = /^\+8801[0-9]{9}/; 
str = "+8801811888889";

re = /^([0-9]x){3}/; 
str = "2x3x7x";


reTest(re, str);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    } 
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}