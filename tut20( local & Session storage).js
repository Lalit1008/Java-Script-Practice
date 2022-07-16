 console.log (" tut20 on local & session storage");

 // local storage me key-value item set karne ke liye, array ko add nahi kar sakte 

 let impArray = ["phindi", "tmatar", "aloo"]; // ise sabji kale key ki value me set karne ke liye
 localStorage.setItem("name", "Krishna");
 localStorage.setItem("name2", "radha");
 // localStorage.setItem("Sabji", impArray); // isse string me answer aayega
 // JSON.stringify use karenge for the Array, yah as an argument ek object leta hai and string return karta hai
 localStorage.setItem("Sabji", JSON.stringify(impArray));
  
 
 // local storage window ka ek function hota hai
 console.log(window.localStorage);
 console.log(typeof(window.localStorage));
 console.log(window.localStorage.name);



 // local storage se item get karne ke liye
let nam1 = localStorage.getItem("name");
console.log(nam1);

// let nam3 = localStorage.getItem("Sabji");  // string ki tarah dikhayega, 
// string ki tarah dekhne ke liye JSON.parse ka use karenge, yah as an argument string leta hai and object return karta hai.
let nam3 = JSON.parse(localStorage.getItem("Sabji"));
console.log(nam3);

/*
// local storage ko clear karne ke liye
localStorage.clear();
let nam2 = localStorage.getItem("name");
console.log(nam2);
*/

// local storage se kisi particular iyem ko remove karne ke liye
 
 localStorage.removeItem("name");


 // session stroge : same function as local storage but main difference is that local storage hamesha ke liye rahti hai but session storage jab browser ko close kar dete hai tab hat jati hai, keval us session tak rahti hai

let simpArray = ["sphindi", "stmatar", "saloo"]; 
 sessionStorage.setItem("sessionname", "sKrishna");
 sessionStorage.setItem("sessionname2", "sradha");
 sessionStorage.setItem("sessionSabji", JSON.stringify(simpArray));