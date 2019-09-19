// // adding element on an aray

// function addition(newElement){
//     let arr = [1,2,3,4,5];
//     arr.push(newElement);
//     console.log(newElement);
//     console.log(arr);
// }

// function additionElement(newElement){
//     let arr = [2,3,4,5,6,7];
//     while (arr !== null){
//         arr = arr[arr.length-1] + newElement;
//         console.log(arr);
//         console.log(`This is inside the loop ${arr}`);
//         break;
//     }
//     console.log(`now we are outside the loop ${arr}`);
// }

// // addition(6);
// additionElement(66);


// function ConstructorFunction(lastName, firstName){
//     this.lastName = lastName;
//     this.firstName = firstName;
// }

// const newPerson = new ConstructorFunction('Sam', 'Smith');
// console.log(newPerson.lastName);
// console.log(newPerson.firstName);
// console.log(newPerson);


// const newObject = new Object();
// newObject.name = 'Subodh';
// newObject.age = 15;
// console.log(newObject);
// console.log(newObject.name);
// console.log(newObject.age);
// console.log('---------------------------')

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// const newObejct = new Person('Subodh', 15);
// console.log(newObject);
// console.log(newObject.name);
// console.log(newObject.age);

// const person = {
//     name: "Subodh",
//     age: '27',
//     address: "Hayward"
// }

// console.log(person['name']);
// console.log(person['age']);


// let arr = [1,2,3,3,4,5];
// for (let i = 0; i <= arr[arr.length - 1]; i++){
//     console.log(arr[i]);
// }

// let string = "thisisit";
// for (let i = 0; i > string.length; i--){
//     console.log(string[i]);
// }

//implementing simple stack

class Stack{
    constructor(arr, elem){
        this.arr = arr;
        this.elem = elem;
    }

    pushing(){
         this.arr.push(this.elem);
         return this.arr;
    }

    poping(){
         return this.arr.pop()
    }

    print(){
        return this.arr;
    }

}


let newobj = new Stack([1,2,3,4], 5);
console.log(newobj.pushing());
console.log(newobj.poping());
console.log(newobj.print())
