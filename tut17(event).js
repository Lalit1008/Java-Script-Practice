console.log(" tut17 on event");
console.log(document.getElementById("heading"));


// click event, is par kitni bar click hua hai
/*
document.getElementById("heading").addEventListener
    ("click", function (e) {    // event object ki proprty ko print karne ke liye e ka use karte hai.
        console.log(" you have click the heading");
        // location.href = "//www.google.com";
        console.log(e);
        let var1 = e.target;  // e.target ek element deta hai
        console.log(var1);
        let var2 = e.target.className;
        // var2 = e.target.id;
        console.log(var2);

        let var3 = e.target.classList;
        console.log(var3);
        // make this an Array
        var4 = Array.from(var3);
        console.log(var4);

       // let var5 = e.offsetX; // welcome to you me aapne kis jagah par click kiya hai, uska count batayega
        // var5 = e.offsetY;
         var5 = e.clientX;  // browser window ke hisab se click par deta hai
         // var5 = e.clientY;

        
console.log(var5);
    }
    )
    */

// 
    // mouseover event se jesew hi mouse us element par jayega, event fire ho jayega.

document.getElementById("heading").addEventListener
    ("mouseover", function (e) {
        console.log(" you have click the heading");
        // location.href = "//www.google.com";
        console.log(e);
        let var1 = e.target;  // e.target ek element deta hai
        console.log(var1);
        let var2 = e.target.className;
        // var2 = e.target.id;
        console.log(var2);

        let var3 = e.target.classList;
        console.log(var3);
        // make this an Array
        var4 = Array.from(var3);
        console.log(var4);

       // let var5 = e.offsetX; // welcome to you me aapne kis jagah par click kiya hai, uska count batayega
        // var5 = e.offsetY;
         var5 = e.clientX;  // browser window ke hisab se click par deta hai
         // var5 = e.clientY;

        
console.log(var5);
    }
    )