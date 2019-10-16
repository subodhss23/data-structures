// define a stack
// last in first out
// last element added to the stack will be the first element removed
// from the stack

// managing function invocation
// undo / redo
// routing(the history object) is treated like a stack!


// implementing array
// var stack = [];
// stack.push('google.com');
// stack.push('instagram.com');
// stack.push('youtube.com');
// console.log(stack);
// console.log(stack.pop());
// console.log(stack);

// implementing stack on linked list
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        console.log(this.size);
        console.log(this);
    }
}

let stack = new Stack();
stack.push('1');
stack.push('2');
stack.push('3');
