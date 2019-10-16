// define a Queue class based on singly linked list

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    add(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    remove(){
        if(!this.first) return undefined;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }
            let removedNode = this.first;
            this.first = removedNode.next;
            this.size--;
            return removedNode.value;
    }
}

let queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
console.log(queue.remove());
console.log(queue.remove());
