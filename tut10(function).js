console.log(" function tut 10");

/*
// define a function
function greet(name1, name2, name3 = " thanks") {
    console.log(`Happy Birthday ${name1} Our age is merely the number of years the world has been enjoying us! ${name2} and ${name3}`);
    return 10;
}


let name1 = " ram";
let name2 = 1008;

// call the function with arugment

let val = greet(name1, name2," thanks a lot"); 
 greet(name1, name2);  // is conditoin me name3 ki default value ko lega.
console.log(val);

// function expression

const mygreet = function(name1, name2, name3 = " thanks") {
    let msg = `Happy Birthday ${name1} Our age is merely the number of years the world has been enjoying us! ${name2} and ${name3}`;
    return msg;
}

let var1 = mygreet(name1, name2, "hello");
console.log(var1);

// creation of function in object
const myobj = {
name: " Ram",
class: function(){ // ne need togive name
    return " Shayam";
}
} 
console.log(myobj);
console.log(myobj.class());

arr = [ " fruits", " vegitable", " grapes"];
arr.forEach(function(element, index, array) {
    console.log(element,index)
});
*/


// var ka scope function level par hota hai and let ka scope block level par hota hai.
var i = 108;
console.log(i);
function XYZ(name){
     var i = 5;
    
    console.log(i);
    return `This person name is ${name}`;
}   
console.log(XYZ("Ram"),i);

var i2 = 108;
console.log(i2);
function XYZ1(name){
      i2 = 5; // it modify the global variable i
    
    console.log(i2);
    return `This person name is ${name}`;
}   
console.log(XYZ1("Ram"),i2);  

var i1 = 108;
console.log(i1);
function XYZ2(name){
     let  i1 = 5; // it modify the global variable i
    
    console.log(i1);
    return `This person name is ${name}`;
}   
console.log(XYZ2("Ram"),i1);  


/*
let i3 = 108;
console.log(i3);
function XYZ3(name){
      i3 = 5;
    
    console.log(i3);
    return `This person name is ${name}`;
}   
console.log(XYZ3("Ram"),i3);

*/


if(1){
    // var ka scope function level par hota hai and let ka scope block level par hota hai.
    var i3 = 108; // ise lwet nahi kar sakte otherwise i3 ko undefine error dega.
    console.log(i3);

}


function XYZ3(name){
    //  i3 = 5;
    let i3  = 5;
    console.log(i3);
    return `This person name is ${name}`;
}   
console.log(XYZ3("Ram"),i3);