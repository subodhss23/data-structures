// implementing linked list

// The design of a linked list

class LinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//create a first node
const head = new LinkedListNode(12);

//add a second node
head.next = new LinkedListNode(99);

// add a third node
head.next = new LinkedListNode(111);

let current = head;

while(current !== null){
    console.log(current.data);
    current = current.next;
}