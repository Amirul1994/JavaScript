let str1 = "Amirul" ; 
let exp1 = /\w/; 

let str2 = "34543"; 
let exp2 = /\w/; 

let str3 = "asdad_"; 
let exp3 = /\w/; 

let str4 = "_asasd"; 
let exp4 = /\w/; 

let str5 = "asds_sd"; 
let exp5 = /\w/; 

let str6 = "asdasd67"; 
let exp6 = /\w/; 

let str7 = "asdasd67_"; 
let exp7 = /\w/; 

let str8 = "_asdad_s87sad87_"; 
let exp8 = /\w/; 

let str9 = "dasd78_"; 
let exp9 = /\w+/; 

let str10 = "&($"; 
let exp10 = /\w/; 

let str11 = "sadas2d&$@"; 
let exp11 = /\w/; 

let str12 = "&%$"; 
let exp12 = /\W/;  

let str13 = "asdasd&"; 
let exp13 = /\W/;

let str14 = "345343*"; 
let exp14 = /\W/; 

let str15 = "_$#_^"; 
let exp15 = /\W/; 

let str16 = "%saasd_456*@"; 
let exp16 = /\W/; 

let str17 = "dasdas_678"; 
let exp17 = /\W/; 

let str18 = "asda_8%"; 
let exp18 = /\W+/; 

let str19 = "as#d_a878$"; 
let exp19 = /\W+/;

let str20 = "sadasd_76"; 
let exp20 = /\W+/; 

let str21 = "86868"; 
let exp21 = /\d/; 

let str22 = "687sadad_%"; 
let exp22 = /\d/; 

let str23 = "sadadsdsasd"; 
let exp23 = /\d/;

let str24 = "sada45&_a"; 
let exp24 = /\d+/;

let str25 = "asd2as%^_"; 
let exp25 = /\D/; 

let str26 = "68968968"; 
let exp26 = /\D/; 

let str27 = "sdadas786%d_"; 
let exp27 = /\D+/; 

let str28 = " amir ul "; 
let exp28 = /\s/; 

let str29 = "Amirul"; 
let exp29 = /\s/; 

let str30 = "dsaa sd"; 
let exp30 = /\S/; 

let str31 = " "; 
let exp31 = /\S/; 

let str32 = "Amirul"; 
let exp32 = /amirul\b/i; 

let str33 = "amirul "; 
let exp33 = /amirul\b/; 

let str34 = " ami rul "; 
let exp34 = /amirul\b/; 

let str35 = " amirul"; 
let exp35 = /amirul\b/; 

let str36 = "amirul(9_"; 
let exp36 = /amirul\b/; 

let str37 = "imamamirul"; 
let exp37 = /amirul\b/; 

let str38 = "imamamirulmaula"; 
let exp38 = /amirul\b/; 

let str39 = "amirul"; 
let exp39 = /\bamirul/; 

let str40 = "amirulmaula"; 
let exp40 = /\bamirul/; 

let str41 = "amirul maula"; 
let exp41 = /\bamirul/; 

let str42 = "imamamirulmaula"; 
let exp42 = /\bamirul/; 

let str43 = "amirul"; 
let exp43 = /\bamirul\b/; 

let str44 = "amirulmaula"; 
let exp44 = /\bamirul\b/; 

let str45 = "imamamirul"; 
let exp45 = /\bamirul\b/;

let str46 = "amirul"; 
let exp46 = /r(?=u)/;

let str47 = "amirul"; 
let exp47 = /r(?=ul)/;

let str48 = "amirul";
let exp48 = /r(?=l)/;

let str49 = "amirul"; 
let exp49 = /r(?!l)/; 

let str50 = "amirul"; 
let exp50 = /r(?!ul)/;



function check(str, exp) {
     if ( exp.test(str)){
        console.log(`${str} matches ${exp}`);
     }
     else {
        console.log(`${str} doesn't match ${exp}`);
     }
};

check(str1, exp1); 
check(str2, exp2); 
check(str3, exp3);
check(str4, exp4); 
check(str5, exp5); 
check(str6, exp6); 
check(str7, exp7); 
check(str8, exp8); 
check(str9, exp9);  
check(str10, exp10); 
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
check(str28, exp28); 
check(str29, exp29); 
check(str30, exp30); 
check(str31, exp31);
check(str32, exp32); 
check(str33, exp33); 
check(str34, exp34); 
check(str35, exp35); 
check(str36, exp36); 
check(str37, exp37); 
check(str38, exp38); 
check(str39, exp39); 
check(str40, exp40); 
check(str41, exp41); 
check(str42, exp42); 
check(str43, exp43); 
check(str44, exp44); 
check(str45, exp45); 
check(str46, exp46); 
check(str47, exp47); 
check(str48, exp48); 
check(str49, exp49); 
check(str50, exp50);