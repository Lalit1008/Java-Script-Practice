console.log("tut14");

/* HTML Element Selector:
1. Single Element Selector:- Use for Select one element at a time from DOM
2. Multi Element Selector: can select more than one element from DOM 
*/

/*
// Single Element DOM Selector

let element = document.getElementById("myfirst");
console.log(element);

// element = element.className;
//element = element.childNodes;

element.style.color = "blue";
element.style.background = "red";
// element.innerText = " Hey Krishna";  // for changing the inner text matter of that element

// use html tag ,<b> is tag se bold ho jayega matter
 
element.innerHTML = " <b> Hey Krishna </b>";
   
console.log(element);
console.log(element.innerHTML);


element = element.parentNode;
console.log(element);

// USE ' # ' for ID and ' . ' For class
let sel  = document.querySelector("#myfirst");
console.log(sel);

let sel1  = document.querySelector(".child ");   // child class ka first element in DOM get 
console.log(sel1);
// we can use tag name also. and get first element

let sel2 = document.querySelector("div");
console.log(sel2);
sel2.style.color = " orange";
*/


// Multielement Selector:

let element1 = document.getElementsByClassName("child");
console.log(element1);
console.log(element1[0]);  // get first element 

let element2 = document.getElementsByClassName("container");
console.log(element2[0].getElementsByClassName("child"));

let element3 =  document.getElementsByTagName("div");
console.log(element3);
// sabhi div ke text bold karne ke liye
Array.from(element3).forEach(element => {
    console.log(element);
    element.style.color = " silver";


});

