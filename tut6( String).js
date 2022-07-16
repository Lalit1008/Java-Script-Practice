console.log("Tut6");

const name = "Ram";
const greeting = "good Morning";
console.log(greeting+name);
// for giving space, write like
console.log(greeting + " " + name);

// String function

let html;
html = "<h1> This Is Heading </h1>" +
        " <p>THIS Is Para </p>";

        console.log(html);

 html = html.concat(' this');
 console.log(html);
 html = html.concat(' this', ' STR1');
 console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html.toLocaleUpperCase());

// indexing, start from 0, at 0 index it return fisrt charcter of string
console.log(html[0]);
console.log(html[49]);
console.log(html.charAt(3));

console.log(html.indexOf("This"));
console.log(html.indexOf("this"));  
console.log(html.indexOf("t"));  
console.log(html.indexOf("H"));  
console.log(html.indexOf("/"));  
console.log(html.indexOf("s"));   // first jo s aayega uske index ko bta dega.

console.log(html.lastIndexOf("/"));  // last bale ki index de dega

// kya hamari string diye gaye charcter se finish hoti hai to true return karega and if not than false return karega.

console.log(html.endsWith("STR1"));
console.log(html.endsWith("str1"));
console.log(html.endsWith("this this STR1"));
console.log(html.endsWith("this thisSTR1"));

// kya hamari string me ye words hai ya nahi, yadi hai to true return karega otherwise false return karega.

console.log(html.includes(" This "));
console.log(html.includes(" this "));
console.log(html.includes(" Thi "));
console.log(html.includes(" is "));
console.log(html.includes(" Is "));
console.log(html.includes(" < "));

// for subString, isme starting pt. index inclued hota hai and last pt. index inclued nahi hota hai.

console.log(html.substring(0,7));
console.log(html.substring(0,50));
console.log(html.substring(7,22));
console.log(html.substring(-10));  // last ke 10 charcter ko chodkar sabhi return karega.

console.log(html.slice(-18)); // last ke 18 charcter de dega
console.log(html.slice(0,18)); // Starting  ke 18 charcter de dega

console.log(html.split(" "));    // jha - jha space aa rha hai, vha-vha se string ko split karke dega.
console.log(html.split("<"));    // jha - jha space aa rha hai, vha-vha se string ko split karke dega.

// replace a string words by ohter words, first word ko hi repalce karta hai, sabhi word ko replace nahi karta.
 console.log(html.replace("this", " That"));   
// console.log(html.replace("I", " A"));   


// Template Literals

let fruits1 = " Apple";
let fruits2 = " Orange";
let myHtml =  `Hello ${name}
 <h2> ${greeting} </h2> <h1> This is a normal heading </h1>
<p> you like ${fruits1} and ${fruits2}</p>` ;

document.body.innerHTML = myHtml;










