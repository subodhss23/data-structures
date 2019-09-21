// writing 100 lines of code at least
//implementing transvering through all elements of a string 
let string = "iamastring"
// var newstring = "";
// for(let i = 0 ; i < string.length ; i++){
//     newstring = newstring + string[i];
// }
// console.log(newstring);



// =====================================

// adding an element in postion x

let position = 3;
let element = 'bbb';
string[position] = element ;
string[3] = 4;
// console.log(string[3]);

let newstring = "";
let array = string.split('');
// console.log(array);
array[position] = element;
// console.log(array[position]);
console.log(array);
console.log(array.join('').toString());
string = array.join('').toString();
console.log(string);



// string = array.toString();
// console.log(string.join(''));

