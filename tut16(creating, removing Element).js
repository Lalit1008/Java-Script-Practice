console.log(" Tut16 on Creating, Replacing and Removing the Element");

let element = document.createElement("li");
// creating text node
let text = document.createTextNode(" this is for creatring text node");
element.appendChild(text);
// add class name to the li element
element.className = "demo";
element.id = " createdLi";
element.setAttribute("title", "my title");
// element.innerText = " this is for creating element ";
console.log(element);
 
// now put this element in DOM. with other li element after the " king" bale element ke bad

let UI1 = document.querySelector("div.child");
console.log(UI1);


// for append child in DOM use "append Child"
UI1.appendChild(element);


// replace an element by another element

let eleme2 = document.createElement("h2");
let tnode = document.createTextNode(" this is a created texr node for ");
eleme2.appendChild(tnode);
eleme2.id = "eleme2";
eleme2.className = " eleme2";

// now we want to replace eleme2 by element  
 element.replaceWith(eleme2);


let elem3 = document.getElementById("myfirst");
console.log(elem3);

// replace child element myli1 by element
let elem4 = document.getElementById("MYli1");
console.log(elem4);

   elem3.replaceChild(element,elem4);


   // remove child element of myfirst id

   elem3.removeChild(document.getElementById("myli4"));
//   elem3.remove();
// remove attribute and set attribute of an element 
 elem3.removeAttribute("id");
 //elem3.removeAttribute("class");

 elem3.setAttribute("id", " mysecond", );
 elem3.setAttribute("title", " mysecond tittle");
 
 console.log(elem3);




