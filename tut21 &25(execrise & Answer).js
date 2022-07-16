console.log(" Tut 21 & 25 execrise and pratice ");

/*
have to created a div and injected it into a page which contain heading.
 


*/

let divElem = document.createElement("div");
let container1 = document.querySelector(".container");
let myfirst = document.getElementById("myfirst");
console.log(divElem, container1, myfirst);

 let textnode = document.createTextNode(" this is an element text node");
 divElem.appendChild(textnode);
 divElem.setAttribute("id", "elem");
divElem.className = "Ram";

console.log(divElem);

// insert the element before lelement by id myfirst
container1.insertBefore(divElem,myfirst);

// add event listner to the divElem 
  divElem.addEventListener("click",function(){
    let html = divElem.innerHTML;
  divElem.innerHTML = `wrtie about you: <textarea name="myText" cols="30" rows="10" id = " TextArea"> ${html}</textarea>` ;


  })
                                                                                  