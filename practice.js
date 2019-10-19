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

function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

console.log(factorial(10));