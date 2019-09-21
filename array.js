// writing 100 lines of code at least
//implementing transvering through all elements of a string 
// let string = "iamastring";

// for(let i = 0;i < string.length; --i){
//     console.log(string[i]);
// }


let string = "thisisme";
let newString = '';
string = string.split('');
console.log(string);
console.log('----------------------------');
let position = 2;
let element = 44444;

console.log(`This is what string[2] was ${string[2]}`);
console.log('----------------------------');

string[position]= element;
console.log('----------------------------');
console.log(string);
console.log('----------------------------');

console.log(`This is what happed to string[2] ${string[2]}`);
console.log('----------------------------');

// console.log(`This is what newString looks like after all execution is done ${newString}`);