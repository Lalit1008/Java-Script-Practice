console.log(" tut 8 on if -else statment");

const age = 42 ;

if( age == 32){  
    console.log( " age is 32");
}
else if (age == 40){
    console.log( " age is 40");

}
else
{
    console.log( " age is not the above");

}

const age1 = '40' ;
// == operator se keval value check hoti hai, type check nahi hota hai ki value kis type ki hai. but value aur type dono ko check karne ke liye === operator ka use karte hai.
if( age1 == 32){  
    console.log( " age1 is 32");
}
else if (age1 == 40){
    console.log( " age1 is 40");

}
else
{
    console.log( " age1 is not the above");

}


/*
const age3 = '40' ;

if( age3 === 32){  
    console.log( " age3 is 32");
}
else if (age3 === 40){ // data type of '40' is string and 40 is number, so condition is false.
    console.log( " age3 is 40");

}
else
{
    console.log( " age3 is not the above");

}
*/

const age3 = '32' ;

if( age3 != 32){    // only value ko check karta hai
    console.log( " age3 is not  32");
}
else
{
    console.log( " age3 is not the above");

}
 if (age3 !== 32){   // vaue and type dono ko check karega.
    console.log( " age3 is not 32");

}
else
{
    console.log( " age3 is not the above");

}


// koi variable define hai ya nahi iske liye if-else statment

let name2;
console.log((typeof name2));
if( (typeof name2)!== 'undefined'){
    console.log(" variable is defined");
}
else{
    console.log(" variable is not defined");

}
// boolean case by if-else
const isDrive = true;

if(isDrive){
    console.log(" you can drive");
}
else{
    console.log(" you can not  drive");

}

// tarnaray operator

console.log(age==42? "  Age is 42" : " Age is not 42");

// Switch case 
let age4 = 45;
switch (age4) {
    case 42:
        console.log(" age is 42");
        break;
    case 32:
        console.log(" age is 32");
        break;

    default:
        console.log(" age is not match");
        break;
}
