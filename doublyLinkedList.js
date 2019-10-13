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
        if(!this.head || !this.tail || this.size === 0) return undefined;
        let removeTail = this.tail;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = removeTail.prev;
            this.tail.next = null;
            removeTail.prev = null;
        }
        this.size--;
        console.log(removeTail);
    }

    unshifting(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    }
   
    shift(){
        if(!this.head) return undefinded;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            var shiftingNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            shiftingNode.next = null;
        }
        this.size--;
        console.log(shiftingNode);
    }
}

let list = new  LinkedList();
list.unshifting(2);
list.unshifting(3);
list.unshifting(4);
console.log(list);


