// implementing basic functions for array

const array = [2,5,1,9,6,7];
array[4];

// inserting element to tail
array.push(4);

// inserting or updating value in index x
array[8] = 3;
console.log(array);
// [ 2, 5, 1, 9, 6, 7, 4, <1 empty item>, 3 ]

// inserting elements on head which changes index of all emement
array.unshift(0);
console.log(array);

// deleting element in x index
// splice modifies original array "array"
array.splice(4, 2);
console.log(array);

// deleting element from the beginning of array
array.shift();
console.log(array);