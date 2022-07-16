console.log(" Tut7 Array and Object");

let marks = [10,20,30,40,50];
const fruits = [ 'Apple', 'Organge', 'grapes'];
const mixed = ['ram', 'shayam', 15, 25,[5,6,7,8,]];

console.log(marks, fruits, mixed);
console.log(marks[0], fruits[2], mixed[4]);

// array with the help of array constructor

const arr =  new Array(10,12,13,'radhe', 'krishna',[1,2,3]);
console.log(arr);
console.log(arr.length);


console.log(Array.isArray(arr));  // arr array hai ya nahi, if yes than return true otherwise return false.
arr[0] = "Radhika";
console.log(arr);
let arrelement = arr[0];
console.log(arrelement);

let value =  marks.indexOf(20);
console.log(value);
let value1 =  marks.indexOf(25);
console.log(value1);
 

// mutating or modifying the array
marks.push(55);   //array ke end me lagane ke liye
console.log(marks);
marks.unshift(15);  // array ke first me lagane ke liye
console.log(marks);
marks.pop();   //array ke end se hatane ke liye
console.log(marks);
 marks.shift();  //array ke starting se hatane ke liye
console.log(marks);

// splice ko array se specific element kis index se hatana hai ke liye use karte hai. isme first argument hota hai kis index se start karna hai and second argument hota hai ki kitne element hatane hai.
marks.splice(1,2);  // index 1 se start karke 2 element hta de.
console.log(marks);  

marks.reverse();   // complete array reverse ho jata hai.
console.log(marks);  

let marks2 = [1,2,3];
marks = marks.concat(marks2);
console.log(marks);  
marks.concat([11,12,13]);
console.log(marks);  
marks = marks.concat([11,12,13]);
console.log(marks);  


// object 

let myObj = {
name: "Krishna",
place: " Vrindavan",
islord: true,
position: 1,
other: [10,11,12,1,]
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj.islord);
console.log(myObj.other);

console.log(myObj['place']);  // another way to access the perticular element
console.log(myObj['other']);

