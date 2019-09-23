// // implementing basic functions for array

// const array = [2,5,1,9,6,7];
// array[4];

// // inserting element to tail
// array.push(4);

// // inserting or updating value in index x
// array[8] = 3;
// console.log(array);
// // [ 2, 5, 1, 9, 6, 7, 4, <1 empty item>, 3 ]

// // inserting elements on head which changes index of all emement
// array.unshift(0);
// console.log(array);

// // deleting element in x index
// // splice modifies original array "array"
// array.splice(4, 2);
// console.log(array);

// // deleting element from the beginning of array
// array.shift();
// console.log(array);

// // deleting element from the middle 
// // again using splice
// array.splice(2,1);
// console.log(array);

// // deleting element from the last position
// array.pop();
// console.log(array);



const array =[1,2,3,4,5,6];
// Insert to tail

array.push(22);
console.log(array);

// Insert/update values anywhere
array[8] = 222;
console.log(array);

// Insert to head, changes every index
array.unshift(11);
console.log(array);

// Deleting could change all the indexes
// on the position 4, delete 2 elements
array.splice(4, 2);
console.log(array);

// Inserting element in the middle
array.splice(4,0, 99);
console.log(array);

// Deleting from the beginning of the array.
array.shift();
console.log(array);

// Deleting from the middle
array.splice(3,1);
console.log(array);

// Deleting last element from the array
array.pop();
console.log(array);