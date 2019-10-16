
// implementing stack with linked list principle
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// building stack with pushing and popping function from the beginning
// rather than from the end to optimize the process and to get 0(1) result
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // pushing and poping from the front of the list
    // to optimize the process.

    // adding nodes in the front of stack/linked list
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
        return(this.size);
        
    }

    // removing node form the beginning of the list
    pop(){
        if(!this.first) return undefined;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        console.log(temp.value);
    }
}

let stack = new Stack();
stack.push('1');
stack.push('2');
stack.push('3');
stack.pop();
stack.pop();
console.log(stack);