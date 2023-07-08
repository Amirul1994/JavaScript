var marks = prompt("enter your marks"); 

if(number = isNaN(marks)){
    console.log("enter only number");
}
else if(marks < 0){
    console.log("invalid marks"); 
}
else if (marks > 100){
    console.log("marks can't be greater than 100");
}else{
    if (marks <= 100 && marks >= 90){
        console.log( "your grade : A+" );
    } else if (marks < 90 && marks >=80 ){
        console.log ( "your grade: A");
    } else if ( marks < 80 && marks >=70){
        console.log("your grade: A-");
    } else if ( marks < 70 && marks >= 60){
        console.log("your grade: B");
    }else if (marks < 60 && marks >=50){
        console.log("your  grade: C");
    }else if (marks < 50 && marks >= 40){
        console.log("your grade: D")
    }else {
        console.log("your grade: F");
    }
}