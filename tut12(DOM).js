console.log(" tut12 on the DOM");

 let a = document;

   console.log(a);
   console.log((typeof a));

   a = document.all;
   console.log(a);

  /* a= document.body; // document ka body tag de dega.
   console.log(a);

   a= document.forms;  // document me jo bhi form honge, vo sabhi aa jayenge.
   console.log(a);
*/
   // foreach function a par nahi lagega because a is not an Array. iske sthan par use like this
 
   Array.from(a).forEach(function(element){
console.log(element);
   })

let b = document.all;
b =  document.links;
console.log(b);
b =  document.links[0];
console.log(b);
b =  document.links[0].href;
console.log(b);



