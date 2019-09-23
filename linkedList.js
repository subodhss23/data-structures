// implementing linked list, singly-linked-list

// function Node(data){
//     this.data = data;
//     this.next = null;
// }

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }

    // adding data to the linked list
    add(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfValues++;
    }
}