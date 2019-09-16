// adding element on an aray

function addition(newElement){
    let arr = [1,2,3,4,5];
    arr.push(newElement);
    console.log(newElement);
    console.log(arr);
}

function additionElement(newElement){
    let arr = [2,3,4,5,6,7];
    while (arr !== null){
        arr = arr[arr.length + 1] + newElement;
        console.log(`This is inside the loop ${arr}`);
        break;
    }
    console.log(`now we are outside the loop ${arr}`);
}

addition(6);
additionElement(66);