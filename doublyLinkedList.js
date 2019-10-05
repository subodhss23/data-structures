// setting up two classes
// one node class
// - value
// - next
// - prev

// doublylinkedlist class
// -head
// -tail
// -length

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    
}

let first = new Node(12);
console.log(first);
first.next = new Node(13);
console.log(first.next);