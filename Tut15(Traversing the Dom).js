console.log("tut15 Traversing the DOM");

let const1 = document.querySelector(".container");
console.log(const1);
// child node comment, text, mnew line sabhi ko count karta hai. and return karta hai and if we are interested in only element than use children.
console.log(const1.childNodes);   // all child node of container class, node list
console.log(const1.children);

 let nodename = const1.childNodes[0].nodeName;

 /* nodetype: 
 Element ke liye nodetype :- 1
 attribute :-   2
 Text Node:-    3
commnent:-      8
Documnet:-      9
DocType:-       10

 */
 let nodetype = const1.childNodes[1].nodeType;


console.log(nodename);
console.log(nodetype);

console.log(const1.firstChild);
console.log(const1.firstElementChild);
console.log(const1.lastChild);
console.log(const1.lastElementChild);
console.log(const1.childElementCount);
console.log(const1.firstElementChild.parentNode);
console.log(const1.firstElementChild.nextSibling);
console.log(const1.firstElementChild.nextElementSibling);
console.log(const1.firstElementChild.nextElementSibling.nextElementSibling);   // like this we can use




