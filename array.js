// let's work on array now

// let x = [1,2,3,4]
// for (let i = 0; i < x.length; i++){
//     console.log(x[i]);
// }

function insertionArray(position, element)
{
    let x = [1,2,3,4,5];
    for (let i = 0; i < x.length; i++){
        // if(x[position] !== null){
        //     x[position] = element;
        // }
        while(true){
            x[position] = element;
            break;
        }
    }
    console.log(x);
}

insertionArray(2, 4444);