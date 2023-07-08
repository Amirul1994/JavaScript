var a = 1; 

for( a = 1; a<=10; a+=2 ){
     console.log(a); 
     break; 
}   


console.log('');

for (let b = 6; b <= 30; b+=6){
    if (b % 3 == 0){
        console.log(b); 
        break;
    }
}    

console.log("");

for ( var c = 1; c<=10; c++){
    if (c % 2 == 0){
        continue;
    }
    console.log(c); 
}