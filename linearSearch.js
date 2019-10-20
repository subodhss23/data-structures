// linear search to find element in an array

// function linearSearch(arr, val){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === val){
//             return i;
//         }
//     }
//     return -1;
// }


class LinearSearch{
    constructor(arr, val){
        this.arr = arr;
        this.val = val;
    }

    linearSearch(arr, val){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === val) return i;
        }
        return -1;
    }
}

let searchMe = new LinearSearch();
searchMe.linearSearch([1,2,3,4], 100)

