// invoke the same function witha different input until you
// reach your base case

// base case
// the condition when the recursion ends(important concept)

// function countDown(num){
//     if(num <= 0){
//         console.log('All done');
//     }
//     else {
//         console.log(num);
//         num--;
//         countDown(num);
//     }
// }
// countDown(3);

// function factorial(num){
//     let total = 1;
//     for(let i = num; i > 1; i--){
//         total *= i;
//     }
//     return total;
// }

// function collectionOddValues(arr){
//     let newArr = [];

//     if(arr.length === 0){
//         newArr.push(arr[0]);
//     }

//     newArr = newArr.concat(collectionOddValues(arr.slice(1)));
//     return newArr;
// }

// collectionOddValues([1,2,3,4,5]);


// write a function called power which accepts a base and an exponent.

function power(base, expo){
   if(expo === 0) return 1;
   else{
       return base * power(base, expo-1);
   }
};

console.log(power(2,2));