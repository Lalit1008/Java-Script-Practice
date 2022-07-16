console.log(" Tut 23 on Math Obj");

let x = 5;
let y = 9;
let z;
z = x + y;
console.log(z);
z = x - y;
console.log(z);
z = x * y;
console.log(z);
z = x / y;
console.log(z);

// Exploring the Math Object

z =  Math;
console.log(z);
 z = Math.PI
console.log(z);
 z = Math.round(5.6); // nearest number aayega
console.log(z);
z = Math.round(5.5);
console.log(z);
z = Math.round(5.4);
console.log(z);
z = Math.round(-5.6);
console.log(z);
z = Math.round(-5.4);
console.log(z);



z = Math.ceil(5.6); // ek increase hokar aayega
console.log(z);
z = Math.ceil(5.5);
console.log(z);
z = Math.ceil(5.4);
console.log(z);
z = Math.ceil(-5.6);
console.log(z);
z = Math.ceil(-5.4);
console.log(z);

z = Math.floor(5.6);  // ek decrease hokae aayega
console.log(z);
z = Math.floor(5.5);
console.log(z);
z = Math.floor(5.4);
console.log(z);
z = Math.floor(-5.6);
console.log(z);
z = Math.floor(-5.6);
console.log(z);

z = Math.abs(5.6);  // negative number ko positive bna do and if number is positive, than remainit positive.
console.log(z);
z = Math.abs(-5.6);
console.log(z);

z = Math.sqrt(36); // squre root on a given number
console.log(z);

z = Math.pow(2, 4);
console.log(z);

z = Math.min(5, 10, 12, 4, 25);  // Minimum Value Number Return karta hai.
console.log(z);
z = Math.min(5, 10, 12, 4, 25,-10);  
console.log(z);

z = Math.max(5, 10, 12, 4, 25);  // Maxmimum Value Number Return karta hai.
console.log(z);

// Random No. 0 to 1 ke madhay me each time differnt no. dega
 z= Math.random();
 console.log (z);

 // if we want random number b/t 30 to 100 than, 
 // Formula_random = starting_range + (end_range - starting_range) * Math.random();


  z = 30 + (100-30)* Math.random();
 console.log (z);

 // if we want random int number b/w  25 to 100 then
 z = Math.ceil(25 + (100-25)* Math.random());  // in this case minimum no. = 25, max = 100
  console.log (z);
  z = Math.floor(25 + (100-25)* Math.random());  // in this case minimum no. = 25, max = 100








