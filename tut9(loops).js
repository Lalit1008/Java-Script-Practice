console.log(" tut 9 on for, while and dowhile loop");

for(let i=0; i<100; i++){
    console.log(i);
}

// while loop
let j=0;
while (j<10) {
    console.log(j)
    j++;  
}

// do while loop

let k = 0;
do{
console.log(k);
k++;
}
while(k<10); 

// break, continue: jab bhi loop ke bahar niklna ho to break ka use karna chahiye and jab bhi ek bar loop ko cho]dna/ skip karna chahte hai to continue ka use kare.

/*
let k1 = 0;
do{
    console.log(k1);
if (k1===5){
    break;
}
k1++;
}
while(k1<10); 
*/


let k1 = 0;
do{
    
if (k1===5){
    k1++;
    continue;
}
console.log(k1);
k1++;
}
while(k1<10); 

/*
let arr = [10,12,15,18,21,23];
arr.forEach(function(element){
    console.log(element);
}) 
*/
// use like this also foreach function
let arr = [10,12,15,18,21,23];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
}) 



// object
let obj = {
name: " ram",
class: 5,
sub1: " Science",
sub2: " lord"
}
// for print this object
// console.log(obj);

for(let key in obj){
    console.log( ` The ${key} of object is ${obj[key]}`);
}