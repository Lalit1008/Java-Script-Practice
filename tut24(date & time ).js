console.log (" Tut 24 on date and time");

let Today = new Date();  // current date
console.log (Today, typeof Today);

// Other date
let otherDate = new Date(" 4-25-2002 12:30:24");
console.log(otherDate);
let otherDate1 = new Date(" july 12 2022");
console.log(otherDate1);
let otherDate2 = new Date(" 13/6/2022");
console.log(otherDate2);
let otherDate3 = new Date(" 6/13/2022");
console.log(otherDate3);


console.log(otherDate.getDay());  // thursday hai, sunday ko 0 , monday ko 1 so than thursday ko 4 count karte hai
console.log(otherDate.getDate());
console.log(otherDate.getMonth());
console.log(otherDate.getFullYear());
console.log(otherDate.getHours());
console.log(otherDate.getMinutes());
console.log(otherDate.getSeconds());
console.log(otherDate.getMilliseconds());

console.log(otherDate.getTime());  // time stamp hai, 1 january 1978 se number of second hai

// for setting date, month, year, hours, miniute, seconds 

otherDate.setDate(3);
console.log(otherDate);
otherDate.setMonth(10);
console.log(otherDate);
otherDate.setFullYear(2015);
console.log(otherDate);
otherDate.setMinutes(20);
console.log(otherDate);
otherDate.setHours(9);
console.log(otherDate);
otherDate.setSeconds(35);
console.log(otherDate);








