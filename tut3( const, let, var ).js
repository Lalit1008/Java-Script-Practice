console.log( "Tut3");
// Variable in JS
// var, let, const ki help se variable banate hai.
var name = " ram";
var channel;
var marks = 32;
marks = 40; // we can change the value of marks 
name =  " sita"; // we can change the name of name.
var marks1 = '32'; // for making string
// channel  = " krishna";
console.log(name, channel, marks, marks1);

/*
rules for creating java script variable:
1. cannot start with numbers
2.  can start with letter, numbers, _ or $
3. they are case sensitive
*/
var _name1 = "shayam";
console.log ( _name1);


 // today time const and let use lete hai.
const name2 =  'radhe';
// name2 = 'radhika';  // by use of const value of variable remain fix. so that we can not change the name of 'name2'.

// imp:- var ka scope globle hota hai. and let ka scope block level tak hota hai,means let se local variable create ho jata hai.
 
{
let name = " geeta";
console.log(name); // sita ke sthan par geeta print hoga, kyoki name variable block level par hai.
}

console.log(name); // sita print hoga

const arr1 = [3, 20,30,25];
arr1.push(45); // const ke sath number to add kiya ja skata hai but arr1 ki reassign nahi kiya ja skta like arr1 = [ 30,20,35]; 
// arr1 = [30,20,35]  not perform

console.log(arr1);


let arr2 = [4, 40,32,28];
arr2 = [ 10,20,30]; // let, var ke sath resign kiya ja sakta hai
console.log(arr2);

/* 
Most common programming case:
1. camelCase: first letter small and all other words first letter capital.
2. kebab-case: all words letter small but seperate by  this sign'-'
3. snake_case: all words letter small but seperate by  this sign'_'
4. PasalCase: all words first letter capital
*/