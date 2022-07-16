console.log( " tut4");


/* 
 Premitive  data type : memory alocation in stack
 e.g.:- string, numbers, boolean, null, undefined, symbol

 Reference data type : memory allocation in heap ( dyanamic)
 e.g: Array, object literials, dates, functions

*/
// primitive data types

// string
let name = " ram";
console.log (" lord of universe is" + name);
// typeof operator use 
console.log (" data type is " + (typeof name));


// Numbers
let marks = 100;
console.log (" data type is " + (typeof marks));

 // boolean
let isDrvie = true;
console.log (" data type is " + (typeof isDrvie));

// null
let nullvar = null;
console.log (" data type is " + (typeof nullvar));

// undefined

let undef = undefined;
console.log (" data type is " + (typeof undef));


// Reference data type: iska type of operator hameasa object hi hoga.
// array
let arr1=[20,30,40, "ram", true,undefined]; // koi bhi primitive data types use kar skte hai.
console.log (" data type is " + (typeof arr1));

// object literals
let marks2 = {
    ram: 100,
    shayam: 100,
    mohan: 100
}
console.log(marks2);
console.log (" data type is " + (typeof marks2));

// functions

function fun1() {
    
}
console.log (" data type is " + (typeof fun1));


// dates
let date = new Date();
console.log (" data type is " + (typeof date));


