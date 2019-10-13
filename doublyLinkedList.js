class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // adding nodes at the end of doubly linked list
    push(val){
        let newNode = new Node(val);
        if(!this.head || this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    // removing a node from the end of doubly linked list
    pop(){
        if(!this.head || !this.tail) return undefined;
        let currentTail = this.tail;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }
        this.tail = this.tail.prev;
        currentTail.next = null;
        currentTail.prev = null;
        this.size--;
        console.log(currentTail);
    }
   
}

let list = new  LinkedList();
list.push(2);
list.push(3);
list.push(4);
list.pop();
console.log(list);

