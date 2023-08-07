let str1 = "Amirul Maula"; 
// let exp1 = /^amirul/i; 
let exp1 = /^maula/i;  

let str2 = "Amirul Maula"; 
//let exp2 = /maula$/i; 
let exp2 = /amirul$/i; 

let str3 = "Amirul Maula"; 
//let exp3 = /^amirul$/i; 
let exp3 = /^amirul maula$/i;  

let str4 = "Amirul"; 
let exp4 = /am.rul/i; 
let exp5 = /a.irul/i; 
let exp6 = /a.rul/i;
let exp7 = /am.iirul/i; 

let str5 = "Amirul"; 
let exp8 = /ami*ul/i; 
let exp9 = /a*mirul/i; 



let str6 = "sAmiruuuu";
let exp11 = /a*mir/i;

let str7 = "Aamiiirul"; 
let exp10 = /m*ir/i;

let exp12 = /ami?rul/i; 
let str8 = "Amirul"; 

let exp13 = /ami?rul/i
let str9 = "Amrul"; 

let str10 = "Ameerul";  
let exp14 = /ami?rul/i; 

let exp15 = /am.rul/i; 
let str11 = "Amirul";

let exp16 = /am.rul/i; 
let str12 = "Ameerul"; 
let str13 = "Amerul"; 
let str14 = "Amrul"; 


function rg (str, exp) {
    if (exp.test(str)) {
        console.log(`${str} matches ${exp.source}`);
    } 
    else {
        console.log(`${str} doesn't match ${exp.source}`);
    }
}; 

rg(str1 , exp1); 
rg(str2 , exp2); 
rg(str3,  exp3); 
rg(str4,  exp4); 
rg(str4,  exp5); 
rg(str4,  exp6); 
rg(str4,  exp7); 
rg(str5,  exp8); 
rg(str5,  exp9); 
rg(str7,  exp10);
rg(str6,  exp11); 
rg(str8,  exp12); 
rg(str8,  exp13); 
rg(str10,  exp14); 
rg(str11,  exp15); 
rg(str12,  exp16); 
rg(str13,  exp16); 
rg(str14,  exp16);