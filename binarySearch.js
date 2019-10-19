// implementation of binary search algorithms
// needs to be sorted
// divide and conquere

function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor(arr.length / 2);
    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle]){
            end = middle - 1;
        }
       else {
           start = middle + 1;
       }
       middle = Math.floor((start + end) / 2);
    }  
    console.log(start, middle, end); 
    console.log(middle);
}

binarySearch([1,2,3,4,5], 5);

