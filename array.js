// push
// pop
// splice 
// filter


// let arr = [1,2,3,4,5];
// let string = "iamastring";

// console.log(`this is very old array where no methods has been used ${arr}`);
// let  newarr = arr.splice(0,2);
// console.log(`This is new array ${newarr}`);
// console.log(`This is our old array after splice has been implement on it${arr}`);

// add an element to the array in certain position
function addArray(element, position){
    let array = [1,2,3,4];
        array = array.splice(position, 1, element);
    console.log(array);
}

addArray(9999, 4);

// let newarr = arr.filter(function(element){
//     return element < 4;
// })

// console.log(newarr);
// console.log(arr);