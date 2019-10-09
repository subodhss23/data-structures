// implement a linked list and traverse it


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
    
    mappingThings(){
         console.log(JSON.stringify(this, null, 2));
        // console.log(JSON.stringify(this.head));
        // console.log(`what if this.tail is called ${this.tail}`);
    }

    traverse(){
        var current = this.head;
        while(current){
            console.log(`This is current.val ${current.val}`);
            console.log(`This is the current.next ${current.next}`);
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(3);
list.mappingThings();