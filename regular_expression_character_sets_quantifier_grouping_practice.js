let str1, exp1; 

str1 = "amirul"; 
exp1 = /am[i]rul/; 

let str2 = "amirul"; 
let exp2 = /am[ir]ul/;

let str3 = "amirul"; 
let exp3 = /am[if]rul/; 

let str4 = "amirul"; 
let exp4 = /^[am]irul/; 

let str5 = "amirul"; 
let exp5 = /^[a]mirul/; 

let str6 = "amirul"; 
let exp6 = /^[an]mirul/; 

let str7 = "amirul"; 
let exp7 = /[^ab]mirul/; 

let str8 = "amirul"; 
let exp8 = /[^jh]irul/; 

let str9 = "amirul"; 
let exp9 = /ami{2}rul/; 

let str10 = "ameerul"; 
let exp10 = /ame{2}rul/; 

let str11 = "ssgridman"; 
let exp11 = /s{2}gridman/;

let str12 = "amirul"; 
let exp12 = /[A-Z]mirul/i; 

let str13 = "amirul"; 
let exp13 = /^[a-o]mirul/; 

let str14 = "amirul maula"; 
let exp14 = /mau{4}la/;  

let str15 = "amirul mauula"; 
let exp15 = /mau{2}la/; 

let str16 = "Imam Muhammad"; 
let exp16 = /^[i-k]mam mu[h-k]am{2}ad?/i;

let str17 = "Imam Muhammad"; 
let exp17 = /^[i-k]mam mu[h-k]am{2}ad?/i; 

let str18 = "addddfg"; 
let exp18 = /ad{2,4}fg/; 

let str19 = "addddfg"; 
let exp19 = /ad{2,5}fg/;  

let str20 = "addddfg"; 
let exp20 = /ad{1,5}fg/; 

let str21 = "addddfg"; 
let exp21 = /ad{8,10}fg/;  

let str22 = "adddg"; 
let exp22 = /ad{2,}g/; 

let str23 = "adg"; 
let exp23 = /ad{2,}g/; 

let str24 = "222334"; 
let exp24 = /^2{2}334/; 

let str25 = "222334"; 
let exp25 = /^2{2,}334/;

let str26 = "222334"; 
let exp26 = /^2{1,6}334/; 

let str27 = "amirul"; 
let exp27 = /([a-z]){1}/; 

let str28 = "44478690"; 
let exp28 = /4{1,3}[0-9]{1}/; 

let str29 = "44478690"; 
let exp29 = /^([0-9]){1}/; 

// mobile number check 

let str30 = "01674850530"; 
let exp30 = /^[0][1][0-9]{1}/; 

let str31 = "01674850530"; 
let exp31 = /^[0][1][0-9]{9}?/;


let str32 = "aassdd"; 
let exp32 = /([asd]){2}/;

let str33 = "3a2a1a"; 
let exp33 = /([0-9]a){3}/; 

let str34 = "4d5d7d6d"; 
let exp34 = /([0-9]d){4}/;


function check (str,exp) {
    if (exp.test(str)) {
        console.log(`${str} matches ${exp.source}`); 
    } else {
        console.log(`${str} doesn't match ${exp.source}`);
    }
}; 


check(str1, exp1); 
check(str2, exp2);
check(str3, exp3); 
check(str4, exp4); 
check ( str5, exp5); 
check (str6, exp6); 
check (str7, exp7); 
check (str8, exp8); 
check(str9, exp9); 
check (str10, exp10); 
check(str11, exp11); 
check(str12, exp12); 
check(str13, exp13); 
check(str14, exp14); 
check(str15, exp15); 
check(str16, exp16);
check(str17, exp17); 
check(str18, exp18); 
check(str19, exp19); 
check(str20, exp20); 
check(str21, exp21); 
check(str22, exp22); 
check(str23, exp23); 
check(str24, exp24); 
check(str25, exp25); 
check(str26, exp26); 
check(str27, exp27);
check (str28, exp28); 
check (str29, exp29); 
check (str30, exp30); 
check (str31, exp31); 
check (str32, exp32); 
check (str33, exp33);  
check (str34, exp34); 