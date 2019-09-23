// implementing doubly linked list

class Node{
    constructor(data){
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }

    add(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfValues++;
    }

    // deleting data from node or deleting node
    remove(data){
        let current = this.head;
        while(current){
            if(current.data = data){
                if(current === this.head && current === this.tail){
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head){
                    this.head = this.head.next;
                    this.head.previous = null;
                } else if ( current === this.tail){
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
                this.numberOfValues--;
            }
            current = current.next;
        }
    }

    // inserting a node
    insertAfter(data, toNodeData){
        let current = this.head;
        while(current){
            if(current.data === toNodeData){
                const node = new Node(Data);
                if(current === this.tail){
                    this.add(data);
                }else{
                    current.next.previous = node;
                    node.previous = current;
                    node.next = current.next;
                    current.next = node;
                    this.numberOfValues++;
                }
            }
            current = current.next;
        }
    }
}