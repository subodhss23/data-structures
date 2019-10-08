//time to do some sorting 

let x = [6,8,7,9];
let temp = null;
for (let i = 0; i <= x.length; i++){
    if(x[i] < x[i+1]){
        console.log(x[i+1]);
        console.log(x[i]);
        temp = x[i];
        console.log(temp);
    }
}