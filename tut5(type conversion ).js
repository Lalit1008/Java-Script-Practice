console.log (' tut5');
// type conversion and type coercion
let myVar;
myVar = 32;
console.log (myVar, (typeof myVar) );
// if myVar chnage to string
myVar = String(32);
console.log (myVar, (typeof myVar) );

// boolean to sting conversion
let booleanVar = true;
console.log (booleanVar, (typeof booleanVar) );
booleanVar = String(true);
console.log (booleanVar, (typeof booleanVar) );

// date to string conversion
let date1 = new Date();
console.log (date1, (typeof date1) );
 date1 = String(new Date());
console.log (date1, (typeof date1) );

// arry to string
let arr =[ 1,2,3,4,5,6];
console.log(arr, arr.length, (typeof arr));
arr =String([ 1,2,3,4,5,6]);
console.log(arr, arr.length, (typeof arr)); // here length means how many charcter

// convert in string by help of string function:-  ' toString() '
let age = 40;
console.log (age, (typeof age));

console.log (age.toString(),age, (typeof age.toString()), (typeof age));

// convert string to number by use of nuber function
let stri = "1234";
console.log(stri,(typeof stri));
 stri = Number("1234");
console.log(stri,(typeof stri));

 stri = Number("12a34"); //  it give NaN means it is ' Not A Number'
 console.log(stri,(typeof stri));

 stri = Number([1,2,3,4,5]); //  it give NaN means it is ' Not A Number' means jha bhi number me convert karne me problem hogi vha Nan aayega
 console.log(stri,(typeof stri));

 stri = Number(true);  // in this case output 1 hoga,true ki default value 1 hoti hai
console.log(stri,(typeof stri));


// use Number Function for converting

let marks2 = " 32.25 ";
console.log (marks2, (typeof marks2));
marks2 = Number("32.25");
console.log (marks2, (typeof marks2));
marks2 = parseInt("32.25");
console.log (marks2, (typeof marks2));
marks2 = parseFloat("32.25");
console.log (marks2, (typeof marks2));


// use Number Function for converting

let marks3 = Number(" 32.25 ");

console.log(marks3.toFixed(8), (typeof marks3));
console.log(marks3.toFixed(6), marks3, (typeof marks3.toFixed()));


// Type Coercion

let mystr =  "123";
let myNum =  35;
console.log( mystr + myNum );
console.log( myNum + mystr );
mystr = Number("123");
console.log( myNum + mystr );


