console.log(" tut 18 on event");
/*
let btn = document.getElementById("btn1");

btn.addEventListener("click", fun1); // click event left click ko ho manta hai
btn.addEventListener("dblclick", fun2); // double click event
btn.addEventListener("mousedown", fun3 );  // mousedown all type click,like left, right etc.

function fun1(e){
    console.log("thanks", e);
// default behaviour ko bypass karne ke liye use this
e.preventDefault(); 

}

function fun2(e){
    console.log("thanks it  a Doubleclick ", e);
// default behaviour ko bypass karne ke liye use this
e.preventDefault(); 

}
function fun3(e){
    console.log("thanks it  a mousedown", e);
// default behaviour ko bypass karne ke liye use this
e.preventDefault(); 

}
*/

// mouseenter, mouseleave, mouse move
/*
let va1 = document.querySelector(".NO");
console.log(va1);
va1.addEventListener("mouseenter", function(){
console.log(" you donot enter");

})
va1.addEventListener("mouseleave", function(){
    console.log(" you donot exit  ");
    
    })
    */
/*
    let va2 = document.querySelector(".NO").nextElementSibling;
    console.log(va2);
    va2.addEventListener("mousemove", function(){

 console.log(" you select mouse move event");

    })
    */

let va3 = document.querySelector(".container");
console.log(va3);
va3.addEventListener("mousemove", function(e){

    console.log(e.offsetX, e.offsetY);
   // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX} )`;
//    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY} )`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},145 )`; // 0 to 255 tak hoti hai colour range

    console.log(" you select mouse move event for Whole Division");
    
    })
    
        